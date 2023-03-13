import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Movie from './pages/movie'
import Series from "./pages/Series"
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  
      {
        path:"/",
         element:<Home />,
         errorElement: <ErrorPage />
       },
      {
        path:"/movie",
        element:<Movie />,
        errorElement: <ErrorPage />
      },
      {
        path:"/series",
        element:<Series />
      }
  
])





function App() {


  return (
    <>
<RouterProvider router={router} />
    </>
  )
}

export default App
