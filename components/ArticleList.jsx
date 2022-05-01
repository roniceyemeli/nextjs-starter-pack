import ArticleItem from './ArticleItem'
import artStyles from '../styles/articles.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={artStyles.grid}>
        {
			articles.map(article =>( <ArticleItem article={article} key={article.id}/>) )
		}
    </div>
  )
}

export default ArticleList