import styles from './App.module.css'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Navbar } from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'
import { Profile } from './pages/Profile/Profile'
import { Single } from './pages/Single/Single'
import { Write } from './pages/Write/Write'

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'


function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route exact path='/register' element={user ? <Navigate to="/" /> : <Register />} />

        <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login />} />

        <Route exact path='/write' element={!user ? <Navigate to="/register" /> : <Write />} />

        <Route exact path='/profile' element={!user ? <Navigate to="/register" /> : <Profile />} />


        <Route path='/post/:postId' element={<Single />} />


      </Routes>
    </Router>

  )
}

export default App
