import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
