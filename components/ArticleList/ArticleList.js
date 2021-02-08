import Article from './Article/Article'
import articleStyles from '../../styles/Article.module.css'

const ArticleList = ({articles}) => {
    if (articles) return (
      <div className={articleStyles.grid}>
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    )
    else return <div>Loading...</div>
}
 
export default ArticleList;