// import {server} from "../config/index"
import ArticleList from '../components/ArticleList/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch(`${server}/api/articles`)
//     const articles = await res.json()
    
//     return {
//       props: {
//         articles
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }

// }

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
