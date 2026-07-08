import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Products from './Products'
import Productform from './Productform'
import Register from './Register'
import About from './About'
function App() {

const [searchquery,setsearchquery]=useState('')

  return (
    <>
    <Header  setsearchquery={setsearchquery} />
    <Routes>

     <Route  path='/'   element={<Home/>}  />
     <Route path='/about' element={<About/>} />
     <Route path='/products' element={<Products  searchquery={searchquery}   />}  />
     <Route path='/pf'  element={<Productform/>}/>
     <Route path='/register' element={<Register/>}   />

    </Routes>
     
    </>
  )
}

export default App
