import React, { useEffect, useRef,useState } from 'react';
import AppRoutes from './routes/AppRoute'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import { AnimatePresence } from "framer-motion";

const App = () => {
  const scrollRef = useRef(null);
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions:{
      smoothWheel:true,
      smoothTouch:true,
      
    }
  });
  return (
    
      <AnimatePresence> <   AppRoutes  ref={scrollRef} /></AnimatePresence>
       
    
  )
}

export default App
