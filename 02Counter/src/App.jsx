import React , { useState } from 'react'  // jo bhi hooks chihiye usko aise laa skte h 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  /* uses of hooks --
  ----useState :ye state ho change krti value update nhi  ,
  means is change ko propg\ogate kiya jata h UI ke andar DOM ke andar
  useState(anything you can give)
*/
let [counter,setCounter]=useState(15)
  // let counter = 15

  const  addValue=()=>{
   /*console.log("value added",Math.random());
 ye value add ho rhi h it means ki counter bhi update ho skti h
*/

// counter = counter + 1 counter asie update nhi hoga
setCounter(counter + 1)
  }
/*
console.log("clicked",counter);  
counter = counter + 1   ye value update ho rhi h console 
m but problem aa rhi h UI updation m taki value screen pr
show ho ..to isko react krega ...uske liye react ne kuch method diya
jisko --HOOKS bolte h

*/
const   removeValue=()=>{
  setCounter(counter - 1)
}

  
  

  return (
    <>
        <h1>chai aur react</h1>
        <h2>Counter value: {counter} </h2>
         
         <button
         onClick={addValue}
         >Add value {counter}</button>
         <br />
         <button
         onClick={removeValue}
         >remove value {counter}</button>
    </>
  )
}

export default App
