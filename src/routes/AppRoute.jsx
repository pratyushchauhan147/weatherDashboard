import React from 'react'
import Home from '../screens/home'
import Test from '../screens/Test'

import { Route,BrowserRouter,Routes } from 'react-router-dom'

import { useScroll, useTransform } from 'framer-motion'

const AppRoutes = () => {
  useScroll
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
      
        <Route path='/testing2'  element={<Test/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes

//orace and aws 
//node js 
// django
//