import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import HelloGreeting from './HelloGreeting.js'

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HelloGreeting />} />
      </Routes>
      </div>
  )
}


export default App