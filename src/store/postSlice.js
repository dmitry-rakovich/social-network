import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'posts', 
    initialState: {
        posts: 
        [
            {
                isEdit: false,
                text: `
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate vero praesentium fugiat esse perspiciatis, veniam pariatur, aspernatur, dolore numquam nulla modi! Necessitatibus qui provident eos magni cupiditate, exercitationem voluptate.
                    Porro, iusto culpa. Et ab cumque voluptatum enim minus expedita voluptatem sint sequi reprehenderit porro. Quis nihil, voluptatibus ullam aliquam ab nisi, soluta maxime rerum odit delectus aspernatur ad unde.
                    Molestias natus repellat ipsa. Ducimus nostrum alias corrupti error id magnam autem nesciunt repellendus recusandae! Expedita nihil eveniet, esse minima molestias et error odit rerum iure, ut, vel fugit aliquid.
                `,
                id: 1,
                img:'https://avatars.yandex.net/get-music-content/6296749/8028cffd.a.23255928-1/200x200'}, 
            {
                isEdit: false,
                text: `
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate vero praesentium fugiat esse perspiciatis, veniam pariatur, aspernatur, dolore numquam nulla modi! Necessitatibus qui provident eos magni cupiditate, exercitationem voluptate.
                    Porro, iusto culpa. Et ab cumque voluptatum enim minus expedita voluptatem sint sequi reprehenderit porro. Quis nihil, voluptatibus ullam aliquam ab nisi, soluta maxime rerum odit delectus aspernatur ad unde.
                    Molestias natus repellat ipsa. Ducimus nostrum alias corrupti error id magnam autem nesciunt repellendus recusandae! Expedita nihil eveniet, esse minima molestias et error odit rerum iure, ut, vel fugit aliquid.
                `,
                id: 2,
                img:'https://avatars.yandex.net/get-music-content/6214856/d568abc0.a.22248502-1/200x200'}, 
            {
                isEdit: false,
                text: `
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cupiditate vero praesentium fugiat esse perspiciatis, veniam pariatur, aspernatur, dolore numquam nulla modi! Necessitatibus qui provident eos magni cupiditate, exercitationem voluptate.
                    Porro, iusto culpa. Et ab cumque voluptatum enim minus expedita voluptatem sint sequi reprehenderit porro. Quis nihil, voluptatibus ullam aliquam ab nisi, soluta maxime rerum odit delectus aspernatur ad unde.
                    Molestias natus repellat ipsa. Ducimus nostrum alias corrupti error id magnam autem nesciunt repellendus recusandae! Expedita nihil eveniet, esse minima molestias et error odit rerum iure, ut, vel fugit aliquid.
                `,
                id: 3,
                img:''},     
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