import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from "./react/src/components/App"
import store from './react/src/redux/configureStore'
import { fetchGreeting } from './react/src/redux/greeting/greetingSlice'
store.dispatch(fetchGreeting())

ReactDOM.render (
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)