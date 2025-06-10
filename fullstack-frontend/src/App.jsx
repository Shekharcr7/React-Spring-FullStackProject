import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddUser from './users/AddUser'
import EditUser from './users/EditUser'
import ViewUser from './users/ViewUser'
import Footer from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>

          <Navbar />
          
          <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path='/adduser' element={<AddUser/>} /> 
             <Route exact path='/edituser/:id' element={<EditUser/>} />
             <Route exact path='/viewuser/:id' element={<ViewUser/>}/>
          </Routes>
         
         <Footer />

        </Router>
      </div>
    </>
  )
}

export default App
