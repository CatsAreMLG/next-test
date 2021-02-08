import Link from 'next/link'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import Head from '../../../components/Head/Head'

import { getAllArticlesWithSlug, getArticleAndMoreArticles } from "../../../lib/api"
import dateFormatter from '../../../lib/dateFormatter'

import articleStyles from '../../../styles/Article.module.css'

const article = ({ article }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  if (article) {
    const date = new Date(article.metadata.author.modified_at)
        return (
          <>
            <Head title={article.title} description={article.excerpt} />
            <div className={articleStyles.articleContainer}>
              <h1>{article.title}</h1>
              <div className={articleStyles.info}>
                <div className={articleStyles.author}>
                  <span>By {article.metadata.author.title}</span>
                  <img
                    className={articleStyles.authorPic}
                    src={article.metadata.author.metadata.picture.imgix_url}
                    alt={article.metadata.author.title}
                  />
                </div>
                <span>{dateFormatter(date)}</span>
              </div>
              <img
                className={articleStyles.hero}
                alt=""
                src={article.metadata.cover_image.imgix_url}
              />
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            {
              article.metadata.link?
              <a
                className={articleStyles.link}
                href={article.metadata.link}
                target="_"
                alt={article.title}
              >
                Visit {article.title}
              </a>
              :null
            }
          </>
        )
  }
  
}

export const getStaticProps = async ({ params, preview = null }) => {
  const data = await getArticleAndMoreArticles(params.slug, preview)
  const content = data.article?.metadata?.content || ""

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