import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <h1 className='bg-green-400  text-black p-4 rounded-xl'>
        Tailwind test</h1>
      <Card channel = "jo-bhi-denge-oo-props-m-jayega"/>
      <Card/>
      <Card/>

</>
  )
}
  

export default App
