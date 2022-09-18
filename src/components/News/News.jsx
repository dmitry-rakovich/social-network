import React, { useState } from 'react'
import { useSelector } from "react-redux"
import style from './News.module.css'
const News = () => {

      const news = useSelector(state => state.news.news)

      const [filteredNews, setFilterednews] = useState(news)

      const filterNews = (e, value) => {
        document.querySelectorAll(`.${style.filter_button}`).forEach(item => item.classList.remove(`${style.active}`))
        e.target.classList.add(`${style.active}`)
        if(value === "All") {
          setFilterednews(news)
        } else setFilterednews(news.filter(item => item.category === value))
      }

  return (
    <>
      <div className={style.filter}>
        <button className={`${style.filter_button} ${style.active}`} onClick={(e) => filterNews(e, e.target.value)} value="All">All</button>
        <button className={style.filter_button} onClick={(e) => filterNews(e, e.target.value)} value="Sport">Sport</button>
        <button className={style.filter_button} onClick={(e) => filterNews(e, e.target.value)} value="Technique">Technique</button>
        <button className={style.filter_button} onClick={(e) => filterNews(e, e.target.value)} value="Auto">Auto</button>
      </div>
      <div className={style.news}>
      {
          filteredNews.map(item => <div className={style.post} key={item.id}>
              <img src={item.img}  width="100%"/>
              <p className={style.text}>{item.text}</p>
              <span className={style.news_category}>{item.category}</span>
          </div>)
      }
      </div>
    </>

  )
}

export  {News}