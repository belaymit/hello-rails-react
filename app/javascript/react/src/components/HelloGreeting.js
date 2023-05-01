import React from 'react'
import { useSelector } from 'react-redux'

const HelloGreeting = () => {
  const greeting = useSelector((state) => state.greeting.message.message)
  const status = useSelector((state) => state.greeting.status)
  let content;
  if(status==='succeeded') {
    content = greeting
  }
  if(status==='loading'){
    content = 'Loading...'
  }

  return (
    <div>
      <h1>Rails React Webpack Greetings</h1>
      <p>{content}</p>
    </div>
  )
}

export default HelloGreeting