import Article from './Article/Article'
import articleStyles from '../../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => <Article article={article} />)}
        </div>
    );
}
 
export default ArticleList;