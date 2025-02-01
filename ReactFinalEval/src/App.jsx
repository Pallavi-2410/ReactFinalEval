import './App.css'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Quiz from './components/Quiz'
import QuizItem from './components/QuizItem'
import Result from './components/Result'


function App() {


  return (
    <>
    <Home/>
    <Routes>
      <Route path="/login" element={ <Login/> }/>
    </Routes>
    <Quiz/>
    <QuizItem/>
    <Result/>
    </>
  )
}

export default App
