import './App.css'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'


function App() {


  return (
    <>
    <Home/>
    <Routes>
      <Route path="/login" element={ <Login/> }/>
    </Routes>
    </>
  )
}

export default App
