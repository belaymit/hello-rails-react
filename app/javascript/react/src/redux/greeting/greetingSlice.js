import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', ()=> {
  return axios.get ('http://localhost:3000/greetings')
  .then((response) => response.data)
})

const initialState = {
  message: [],
  status: 'idle'
}

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder 
    .addCase(fetchGreeting.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchGreeting.fulfilled, (state, action)=> {
      state.status = 'succeeded';
      state.message = action.payload
    })
  }
})

export const { greetingReducer } = greetingSlice.actions
export default greetingSlice.reducer 