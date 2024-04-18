import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Effective from './Effective'
import Managment from './Managment'
import Cards from './Cards'
import Testimonial from './Testimonial'
import Footer from './Footer'

function AllComp() {
  return (
    <>
        <Navbar></Navbar>
        <Home></Home>
        <Effective></Effective>
        <Managment></Managment>
        <Cards></Cards>
        <Testimonial></Testimonial>
        <Footer></Footer>
    </>
  )
}

export default AllComp