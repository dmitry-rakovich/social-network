import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts', 
    initialState: {
        posts: 
        [
            {isEdit: false, text: '25/17 - Одолень', id: 1, img:'https://avatars.yandex.net/get-music-content/6296749/8028cffd.a.23255928-1/200x200'}, 
            {isEdit: false, text: '25/17 - Неизбывность', id: 2, img:'https://avatars.yandex.net/get-music-content/6214856/d568abc0.a.22248502-1/200x200'}, 
            {isEdit: false, text: '25/17 - Байки из склепа', id: 3, img:''},     
        ]
    }, 
    reducers: {
        addPost(state, action) {
            state.posts.push({
                id:Date.now(),
                text: action.payload.text, 
                img: action.payload.img,
                isEdit: false
            })
        }, 
        editPost(state, action) {
            const currentPost = state.posts.find(post => post.id === action.payload.id)
            currentPost.isEdit = !currentPost.isEdit
        },
        savePost(state, action) {
            const currentPost = state.posts.find(post => post.id === action.payload.id)
            currentPost.text = action.payload.newText
            currentPost.img = action.payload.newImg 
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        }
    }
})



export const {addPost, editPost, savePost, deletePost} = postSlice.actions

export default postSlice.reducer