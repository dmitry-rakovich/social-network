import React, { useState } from 'react'
import { News } from '../News/News'

const Filter = ({news, setNews}) => {

  const filterNews = (value) => {
    setNews(news.filter(item => item.category === value))
  }

  return (
    <div className='filter-buttons'>
    <button onClick={(e) => filterNews(e.target.value)} value="">All</button>
    <button onClick={(e) => filterNews(e.target.value)} value="Sport">Sport</button>
    <button onClick={(e) => filterNews(e.target.value)} value="Social">Social</button>
    <button onClick={(e) => filterNews(e.target.value)} value="Auto">Auto</button>
    </div>
  )
}

export {Filter}