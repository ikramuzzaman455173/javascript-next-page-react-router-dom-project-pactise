import React from 'react'
import { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './Components/About'
import Bookdetails from './Components/Bookdetails'
import Books from './Components/Books'
import ErrorPage from './Components/Errorpage'
import Home from './Components/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children:
      [
        {
          path: '/',
          element:<Home/>
        },
        {
          path: '/about',
          element:<About/>
        },
          // {
          //   path: '/loader',
          //   element:<LoadingSpinner/>
          // },
        {
          path: '/books',
          element: <Books />,
          loader:()=>fetch('https://api.itbook.store/1.0/new')
        },
        {
          path: 'book/:id',
          element: <Bookdetails />,
          loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
        },
      ]
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
