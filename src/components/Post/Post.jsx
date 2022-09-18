import {React, useState} from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, editPost, savePost } from '../../store/postSlice'
import style from './Post.module.css'

const Post = ({img, text, id, isEdit}) => {
  
  const dispatch = useDispatch()

  const [newImg, setNewImg] = useState('')
  const [newText, setNewText] = useState('')

  const editItem = (e) => {
    setNewImg(e.target.parentElement.parentElement.querySelector(`img`) ? e.target.parentElement.parentElement.querySelector(`img`).src :  '')
    setNewText(e.target.parentElement.parentElement.querySelector(`p`).innerText)
    dispatch(editPost({id}))
  }

  const saveItem = (e) => {
    if (e.target.previousElementSibling.checkValidity()) {
      dispatch(savePost({id, newText, newImg}))
      dispatch(editPost({id}))
    } else e.target.previousElementSibling.reportValidity()
  }

  return (
    <>
    {!isEdit && <div className={style.post}>
      {img && <img src={img} width='50%'/>}
      <p className={style.text}>{text}</p>
      <div className={style.buttons}>
        <button className={style.button} onClick={(e) => editItem(e)}>Edit</button>
        <button className={style.button} onClick={() => dispatch(deletePost({id}))}>Delete</button>
      </div>
    </div>}
      {isEdit &&
              <div className={style.post}>
                <textarea
                className={style.textarea} 
                onChange={(e)=> setNewText(e.target.value)} 
                type="text" 
                defaultValue={text}
                placeholder="Add new text"
                />
                <input
                className={style.input}
                onChange={(e)=> setNewImg(e.target.value)} 
                type="url" 
                defaultValue={img}
                placeholder="Add new image URL"
                />
                <button className={style.button} onClick={(e) => saveItem(e)}>Save</button>
            </div>
      }
    </>
  )
}

export {Post}