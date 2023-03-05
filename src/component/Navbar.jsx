import React from 'react'

function Navbar() {
  return (
    <div style={{backgroundColor:"blue",width:"100%",padding:"20px"}}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h1>DEMO Streaming</h1>
        <div>
        <button>Login</button>
        <button>Start your free trial</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
