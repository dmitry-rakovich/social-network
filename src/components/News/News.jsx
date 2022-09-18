import { useSelector } from "react-redux"
import style from './News.module.css'
const News = () => {

  const news = useSelector(state => state.news.allNews)

  return (
      <div className={style.news}>
      {
          news.map(item => <div className={style.post} key={item.id}>
              <img src={item.img}  width="100%"/>
              <p className={style.text}>{item.text}</p>
              <span className={style.news_category}>{item.category}</span>
          </div>)
      }
      </div>
  )
}

export  {News}