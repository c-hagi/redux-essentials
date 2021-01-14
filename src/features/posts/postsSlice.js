import { createSlice } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  { content: 'Hello!', date: sub(new Date(), { minutes: 10 }).toISOString()},

  { content: 'More text', date: sub(new Date(), { minutes: 5 }).toISOString()}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }  }
 })
 export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

 export default postsSlice.reducer