import Link from 'next/link'
import articleStyles from '../../../styles/Article.module.css'

const Article = ({article}) => {
    return (
      <Link href="/article/[slug]" as={`/article/${article.slug}`}>
        <div className={articleStyles.container}>
            <img
            className={articleStyles.img}
            src={article.metadata.cover_image.imgix_url}
            alt={article.slug}
            />
            <a className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.metadata.excerpt.slice(0, 80)}...</p>
            </a>
        </div>
      </Link>
    );
}
 
export default Article;