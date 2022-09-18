import { Profile } from "../components/Profile/Profile"
import { Post } from '../components/Post/Post'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from '../store/postSlice'

import style from '../components/Profile/Profile.module.css'

const Profilepage = () => {

  const posts = useSelector(state => state.posts.posts)

  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const [isShowForm, setShowForm] = useState(false)
  const dispatch = useDispatch()
  const addItem = (e) => {
    if (text.trim()) {
      if (e.target.previousElementSibling.checkValidity()) {
      dispatch(addPost({text, img}))
      setText('')
      setImg('')
      setShowForm(false)
    } else e.target.previousElementSibling.reportValidity()} else {
      e.target.previousElementSibling.previousElementSibling.value = ''
      e.target.previousElementSibling.previousElementSibling.reportValidity()
    }
  }

  return (
    <>
      <Profile/>
      <div className={style.posts}>
        {posts.length ? <h1>Posts</h1> : <h1>No posts</h1>}
        <button className={style.button_show_post} onClick={() => {setShowForm(!isShowForm)}}>Add post</button>
        {isShowForm && 
        <div className={style.form}>
          <h2>Add post</h2>
          <textarea className={style.textarea} required value={text} onChange={(e) => setText(e.target.value)} placeholder="Add text"/>
          <input className={style.input} type="url" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Add image URL"/>
          <button className={style.button_show_post} onClick={(e) => addItem(e)}>Add post</button>
        </div >
        }
        {
        posts.concat().reverse().map(item => 
        <Post
        key={item.id}
        {...item}
        />
        )
        }
      </div>
    </>
  )
}

export {Profilepage}