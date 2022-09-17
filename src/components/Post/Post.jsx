import {React, useState} from 'react'
import style from './Post.module.css'

const Post = ({post, posts, setPosts}) => {
  const [newImg, setNewImg] = useState('')
  const [newText, setNewText] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const savePost = (e) => {
    e.preventDefault()
    setPosts([
      {
        text:newText, img:newImg, id:Date.now()
      },
      ...posts.filter(item => item.id !== post.id)
    ])
  }

  const editPost = (e, postId) => {
    setNewImg(e.target.parentElement.parentElement.querySelector(`img`) ? e.target.parentElement.parentElement.querySelector(`img`).src :  '')
    setNewText(e.target.parentElement.parentElement.querySelector(`p`).innerText)
    if(postId === post.id) {
      setIsEdit(!isEdit)
    }
  }

  const deletePost = (postId) => {
    setPosts(posts.filter(item => item.id !== postId))
}

  return (
    <>
    {!isEdit && <div className={style.post}>
      {post.img && <img src={post.img}/>}
      <p className={style.text}>{post.text}</p>
      <div className={style.buttons}>
        <button className={style.button} onClick={(e) => editPost(e, post.id)}>Edit</button>
        <button className={style.button} onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    </div>}
      {isEdit &&
              <form className={style.post}>
                <textarea
                className={style.textarea} 
                onChange={(e)=> setNewText(e.target.value)} 
                type="text" 
                defaultValue={post.text}
                placeholder="Add new text"
                />
                <input
                className={style.input}
                onChange={(e)=> setNewImg(e.target.value)} 
                type="url" 
                defaultValue={post.img}
                placeholder="Add new image URL"
                />
                <button className={style.save_button} onClick={(e) => savePost(e)}>Save</button>
            </form>
      }
    </>
  )
}

export {Post}