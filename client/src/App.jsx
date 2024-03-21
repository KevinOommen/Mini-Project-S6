import { useState } from 'react'
import AuthComponent from '../components/AuthComponent'
import './App.css'

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthComponent />
    </>
  )
}

export default App;
