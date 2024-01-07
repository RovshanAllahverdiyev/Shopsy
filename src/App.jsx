import { useEffect } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'

import AOS from 'aos'
import 'aos/dist/aos.css'


const App = () => {

useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh
})


  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}

export default App