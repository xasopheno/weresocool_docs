import Head from 'next/head';
import Layout from '../../components/layout';
import React from 'react';
import fs from 'fs';
{
  /* import hydrate from "next-mdx-remote/hydrate" */
}
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import path from 'path';
{
  /* import renderToString from "next-mdx-remote/render-to-string" */
}
import { GetStaticPropsContext } from 'next';
import { WSCWithRatioChart } from '../../components/WSC_with_RatioChart';
import { Break, CoolText } from '../../components/mdx';
import { WereSoCool } from '../../components/WereSoCool';
import { capitalize, useStopAndWait } from '../../utils/misc';
import {
  tutorialFilePaths,
  TUTORIAL_PATH,
  PT_TUTORIAL_PATH,
} from '../../utils/mdxUtils';
import { tutorialMenu } from '../../components/menu/menus';
import { useRouter } from 'next/router';
import { Vimeo } from '../../components/video';
import {
  Content,
  GoldLink,
  CoolLink,
  LinkText,
  PostContainer,
  PostProps,
} from '../../components/postComponents';

const components = {
  WereSoCool,
  WSCWithRatioChart,
  Head,
  Vimeo,
  CoolText,
  Break,
  CoolLink,
};

export default function PostPage({ source, frontMatter }: PostProps) {
  const router = useRouter();
  const menu = tutorialMenu;
  const stopAndWait = useStopAndWait();

  return (
    <Layout sectionPath={'tutorials'} menuData={menu}>
      <PostContainer>
        <Content>
          <div>
            <h1 style={{ textDecoration: 'underline' }}>{frontMatter.title}</h1>
            {frontMatter.description && <p>{frontMatter.description}</p>}
          </div>
          <div>
            <MDXRemote {...source} components={components} />
            <Break />
            {frontMatter.next && (
              <GoldLink
                onClick={async () => {
                  stopAndWait();
                  router.push(`/tutorials/${frontMatter.nextLink}`);
                }}
              >
                <LinkText>{`Next Tutorial ~> ${capitalize(
                  frontMatter.next,
                )}`}</LinkText>
              </GoldLink>
            )}
          </div>
        </Content>
      </PostContainer>
    </Layout>
  );
}
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const slug = context.params?.slug;
  let tutorialPath = context.locale === 'pt' ? PT_TUTORIAL_PATH : TUTORIAL_PATH;
  const postFilePath = path.join(tutorialPath, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
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
};

export const getStaticPaths = async ({ locales }: { locales: string[] }) => {
  const paths = locales.flatMap(locale =>
    tutorialFilePaths
      .map(path => path.replace(/\.mdx?$/, ''))
      .map(slug => ({ params: { slug }, locale })),
  );

  return {
    paths,
    fallback: false,
  };
};
