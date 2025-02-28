import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import RandomCourse from './pages/RandomCourse'
import ErrorPage from './pages/ErrorPage'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
        <Route path='/courses/:id' element={<RandomCourse />} />
        <Route path='/courses/:id/details' element={<CourseDetail />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App