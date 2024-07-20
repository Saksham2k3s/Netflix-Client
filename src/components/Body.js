import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse'
import Home from '../Pages/Home';
function Body() {
    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/browse',
            element : <Browse/>   
        }
    ])
  return (
    <div>
    <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body