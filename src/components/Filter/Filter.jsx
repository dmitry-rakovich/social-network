import { useDispatch } from 'react-redux'
import {filterNews} from '../../store/newsSlice'
import style from '../News/News.module.css'

const Filter = () => {

  const dispatch = useDispatch()

  const filterItems = (e) => {
    document.querySelectorAll(`.${style.filter_button}`).forEach(item => item.classList.remove(`${style.active}`))
    e.target.classList.add(`${style.active}`)
    const category = e.target.value
    dispatch(filterNews({category}))
  }

  return (
    <div className={style.filter}>
    <button className={`${style.filter_button} ${style.active}`} onClick={(e) => filterItems(e)} value="All">All</button>
    <button className={style.filter_button} onClick={(e) => filterItems(e)} value="Sport">Sport</button>
    <button className={style.filter_button} onClick={(e) => filterItems(e)} value="Technique">Technique</button>
    <button className={style.filter_button} onClick={(e) => filterItems(e)} value="Auto">Auto</button>
    </div>
  )
}

export {Filter}