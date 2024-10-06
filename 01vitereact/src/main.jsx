import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

  function MyApp(){
    return (
      <div>
        <h1>Custom App | chai</h1>
      </div>
    )
  }
  /* // ye mera nhi chal rha tha kyuki ye type ,props apne aap se bana liye the ,react ka rule se nhi 
  const eactElement ={
  type:'a',
  props:{
     href:"https://google.com",
     target:'_blank'
  },
  children:'click me to visit google
  }

  */

  const anotherElement=(
    <a href="https://google.com" target ="_blank">visit google</a>
  )


  const anotherUser ="chai aur react"

// ye hum react ke method se banye h
  const reactElement =React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser  //evaluated expression

  )


  ReactDOM.createRoot(document.getElementById('root')).
  render(

   reactElement


  )