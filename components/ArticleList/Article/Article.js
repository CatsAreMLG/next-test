import Link from 'next/link'
import articleStyles from '../../../styles/Article.module.css'

const Article = ({article}) => {
    return (
        <Link href="/article/[slug]" as={`/article/${article.slug}`}>
            <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.body}</p>
            </a>
        </Link>
    );
}
 
export default Article;