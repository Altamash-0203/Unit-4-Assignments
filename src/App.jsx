
import './App.css'
import Home from './Coding-Contest/Q1/Home'
import Main from './Coding-Contest/Q1/Main'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
      
    </>
  )
}

export default App
