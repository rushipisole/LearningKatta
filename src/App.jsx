import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Services from './components/Services'
import Blogs from './components/Blogs'
import Login from './components/Login'
import Registration from './components/Registration'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'



function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
