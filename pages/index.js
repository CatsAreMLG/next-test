import Head from '../components/Head/Head'
import ArticleList from '../components/ArticleList/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head title={"Next News"} name={"keywords"} content="web development, programming" />
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
