// pages/posts/[id].js
import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css";
import Head from "next/head";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  } catch (err) {
    console.error('Error in getStaticProps:', err);
    return {
      notFound: true,
    };
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head><title>{postData.title}</title></Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}