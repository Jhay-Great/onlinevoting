import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import Header from './components/welcome/Header'
// import Footer from './components/footer/FooterContainer'
import Form from './components/userForm/Form'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
// import Test from './components/extra/useStateTest'
// import MotherContainer, { Data, TheForm } from './components/extra/testingUsState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/form' element= { <Form /> } />
      </Routes>
      
    </div>
  )
}

export default App
