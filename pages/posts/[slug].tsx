import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import CustomLink from "../../components/CustomLink";
import Layout from "../../components/Layout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { WereSoCool } from "../../components/WereSoCool";
import { WSCWithRatioChart } from "../../components/WSC_with_RatioChart";
import { useWasm, WASM_READY_STATE } from "../../utils/useWasm";
import { MdxRemote } from "next-mdx-remote/types";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { capitalize } from "../../utils/misc";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  WereSoCool,
  WSCWithRatioChart,
  Head,
};

type FrontMatter = {
  [key: string]: any;
};

type PostProps = { source: MdxRemote.Source; frontMatter: FrontMatter };

const stop_lang = `{ f: 220, l: 1, g: 1, p: 0 }\nmain = {Fm 0}`;
export default function PostPage({ source, frontMatter }: PostProps) {
  const content = hydrate(source, { components });
  const [WasmProvider, wasmObject] = useWasm();

  return (
    <Layout>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <WasmProvider value={wasmObject}>
        {wasmObject.readyState === WASM_READY_STATE.READY && (
          <>
            {content}
            {frontMatter.next && (
              <CustomLink
                onClick={() => wasmObject.manager!.push(stop_lang)}
                href={`/posts/${frontMatter.next}`}
                as={`/posts/${frontMatter.next}`}
              >
                {`Next Tutorial ~> ${capitalize(frontMatter.next)}`}
              </CustomLink>
            )}
          </>
        )}
      </WasmProvider>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  );
}

interface StaticPropsType {
  source: MdxRemote.Source;
  frontMatter: FrontMatter;
  slug: string | string[];
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<StaticPropsType>> {
  const slug = context.params!.slug;
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: slug!,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
