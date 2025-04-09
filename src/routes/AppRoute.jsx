import React from 'react'
import Home from '../screens/Home'


import { Route,BrowserRouter,Routes } from 'react-router-dom'

import { useScroll} from 'framer-motion'

const AppRoutes = () => {
  useScroll
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path='/'  element={<Home/>} />
    </Routes>
    </BrowserRouter></div>
    
  )
}

export default AppRoutes

//orace and aws 
//node js 
// django
//