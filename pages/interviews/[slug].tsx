import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import CustomLink from "../../components/CustomLink";
import { interviewFilePaths, INTERVIEWS_PATH } from "../../utils/mdxUtils";
import { MdxRemote } from "next-mdx-remote/types";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { capitalize } from "../../utils/misc";
import { useRouter } from "next/router";
import styled from "styled-components";

const GoldLink = styled.div`
  color: goldenrod;
  font-size: 1.25em;
`;

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.

const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

type FrontMatter = {
  [key: string]: any;
};

type PostProps = { source: MdxRemote.Source; frontMatter: FrontMatter };

export default function InterviewPage({ source, frontMatter }: PostProps) {
  const content = hydrate(source, { components });
  const router = useRouter();

  return (
    <div>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <div>
        {content}
        {frontMatter.next && (
          <GoldLink
            onClick={async () => {
              router.push(`/interviews/${frontMatter.next}`);
            }}
          >
            {`Next Tutorial ~> ${capitalize(frontMatter.next)}`}
          </GoldLink>
        )}
      </div>
    </div>
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
  const interviewFilePath = path.join(INTERVIEWS_PATH, `${slug}.mdx`);
  console.log(interviewFilePath);
  const source = fs.readFileSync(interviewFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
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
  const paths = interviewFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
