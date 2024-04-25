import React from 'react'
import RickAndMortyApp from "../RickAndMortyApp";
import { BrowserRouter , Route, Routes} from 'react-router-dom'

import Home from '../components/Home';
//ra que termina en e
//colocar en home sobre las 10 tarjetas aleatorias
//en rick and morty va lo de episode
const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/character" element={<RickAndMortyApp/>}/>
        <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default Navigation