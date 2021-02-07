import Link from 'next/link'
import Head from '../../../components/Head/Head'

import { getAllArticlesWithSlug, getArticleAndMoreArticles } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

const article = ({article}) => {
    return (
      <>
        <Head title={article.title} description={article.excerpt} />
        <h1>{article.title}</h1>
        <img alt="" src={`${article.metadata.cover_image.imgix_url}?w=400`} />
        <p>{article.metadata.content}</p>
        <br />
        <Link href="/">Go Back</Link>
      </>
    );
}

export const getStaticProps = async ({ params, preview = null }) => {
  const data = await getArticleAndMoreArticles(params.slug, preview);
  const content = await markdownToHtml(data.Article?.metadata?.content || "");

  return {
    props: {
      preview,
      article: {
        ...data.article,
        content,
      },
      moreArticles: data.moreArticles || [],
    },
  };
}

export const getStaticPaths = async () => {
  const allArticles = (await getAllArticlesWithSlug()) || [];
  return {
    paths: allArticles.map((article) => `/article/${article.slug}`),
    fallback: true,
  };
}
 
export default article;