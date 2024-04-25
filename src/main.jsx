import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import RickAndMortyApp from './RickAndMortyApp.jsx'
import Home from './components/Home.jsx'
const router=createHashRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/character",
    element:<RickAndMortyApp/>,
  },{
    path:"/",
    element:<p>ERROR 404 Pagina Inexistente</p> ,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
