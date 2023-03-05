import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function ErrorPage() {
  return (
    <div>
      <Navbar/>
      <div style={{height:"500px"}}>
      <h1>Oops ,somthing went wrong</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default ErrorPage
