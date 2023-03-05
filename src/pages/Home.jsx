import React from 'react'
import {Link} from "react-router-dom"
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./home.css"

function Home() {
  return (
  <>
    <Navbar/>
    <div style={{backgroundColor:"gray",width:"100%",marginBottom:"10px"}}>Popular titles</div>

      <div className='container' style={{height:"500px"}}>
        <div className='title'>
            <Link to={"/movie"}><img src="/assets/placeholder.png" className='img1'/></Link>
            <p>Popular Movies</p>
            </div>
        <div className='title'>
            <Link to={"/series"}><img src="/assets/placeholder.png" className='img1'/></Link>
            <p>Popular Series</p>
            </div>
      </div>
    <Footer/>
  </> 
  )
}

export default Home
