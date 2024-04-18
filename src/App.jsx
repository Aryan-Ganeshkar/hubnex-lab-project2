
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './Component/Cards'
import Effective from './Component/Effective'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Managment from './Component/Managment'
import Navbar from './Component/Navbar'
import Testimonial from './Component/Testimonial'
import AllComp from './Component/AllComp'

function App() {
  

  return (
    <>
      
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<AllComp></AllComp>}> </Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/effective' element={<Effective></Effective>}></Route>
        <Route path='/managment' element={<Managment></Managment>}></Route>
        <Route path='/cards' element={<Cards></Cards>}></Route>
        <Route path='/testimonial' element={<Testimonial></Testimonial>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>

       </Routes>
      </BrowserRouter>
       

    </>
  )
}

export default App
