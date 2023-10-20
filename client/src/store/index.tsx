import { configureStore } from '@reduxjs/toolkit'
import signUpReducer from "./auth";
import signinReduser from './signinReduser';
import UserSlice from "./productData";
import getUserSlice from './signinReduser'
import getUser from './userSlice'
import productReducer from "./productData"
import chatReducer from './chatSlice';
import messagesSlice from './messagesSlice';
import postReducer from "@/store/AllPostsSlice"


export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    ...signinReduser,
    products: productReducer,
    posts: postReducer,
    chat: chatReducer,
    messages: messagesSlice,
    ...getUserSlice,
    activeUser: getUser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch





