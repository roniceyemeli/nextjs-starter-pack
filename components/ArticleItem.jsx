import Link from 'next/link';
import arStyles from '../styles/articles.module.css';

const ArticleItem = ({article}) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={arStyles.card}>
            <h1>{article.title} &rarr;</h1>
            <p>{article.excerpt}</p>
        </a>
    </Link>
  )
}

export default ArticleItem