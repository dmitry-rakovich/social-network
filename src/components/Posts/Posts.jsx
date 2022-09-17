import style from "./Posts.module.css"

import React, { useState } from 'react'

import { Post } from '../Post/Post'

const Posts = () => {

    const [posts, setPosts] = useState([
        {text: '25/17 - Одолень', id: 1, img:'https://avatars.yandex.net/get-music-content/6296749/8028cffd.a.23255928-1/200x200'}, 
        {text: '25/17 - Неизбывность', id: 2, img:'https://avatars.yandex.net/get-music-content/6214856/d568abc0.a.22248502-1/200x200'}, 
        {text: '25/17 - Байки из склепа', id: 3, img:''}, 
        
    ])
    // const [posts, setPosts] = useState([])
    const [text, setText] = useState('')
    const [img, setImg] = useState('')
    const [isShowForm, setShowForm] = useState(false)
    const addPost = (e) => {
        e.preventDefault()
        e.target.previousElementSibling.checkValidity()
        if (text.trim()) {
            if (document.forms[0][1].checkValidity()) {
                setPosts([
                ...posts, 
                {
                    id:Date.now(),
                    text, 
                    img
                }
            ])
            setText('')
            setImg('')
            } else document.forms[0][1].reportValidity()

        } else {
            e.preventDefault()
            e.target.previousElementSibling.previousElementSibling.value = ''
            document.forms[0].reportValidity()
        }
    }
        return (
            <> 
                {posts.length ? <h1>Posts</h1> : <h1>No posts</h1>}
                <button onClick={() => {setShowForm(!isShowForm)}}>Add post</button>
                {isShowForm && <form className={style.form}>
                    <h2>Add post</h2>
                    <textarea className={style.textarea} value={text} onChange={(e) => setText(e.target.value)} required placeholder="Add text"/>
                    <input className={style.input} type="url" value={img} onChange={(e) => setImg(e.target.value)} placeholder="Add image URL"/>
                    <button onClick={(e) => addPost(e)}>Add post</button>
                </form >}
                {
                    posts.map(item => 
                    <Post 
                    post={item}
                    key={item.id}
                    posts={posts}
                    setPosts={setPosts}
                    />
                    )
                }
            </>
        )
}

export {Posts}