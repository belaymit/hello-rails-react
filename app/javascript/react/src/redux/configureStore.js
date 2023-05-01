import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from '../redux/greeting/greetingSlice'
const store = configureStore({
  reducer: {
    greeting: greetingReducer
  }
})

export default store