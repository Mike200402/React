import "./App.css";
import shuffleArray from "./Funtion.js";
import CardAll from "./components/CardAll";
import React, { useEffect, useState } from "react";



function App() {
  const [user, setuser] = useState([]);
  const [rickAndMortyData, setRickAndMortyData] = useState([]);
  const [numberOfCards, setNumberOfCards] = useState(1); // Define el número deseado de cartas
  const [numberOfCards1, setNumberOfCards1] = useState(1); // Define el número deseado de cartas
  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setuser(data.results);
        console.log(data.results);
      });
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setRickAndMortyData(data.results);
        console.log(data.results);
      });
  }, []);

  // Mezcla los usuarios de manera aleatoria
  const shuffledUsers = shuffleArray(user);
  const shuffledEpisodes = shuffleArray(rickAndMortyData);

  // Utiliza slice para limitar la cantidad de cartas mostradas
  const limitedUsers = shuffledUsers.slice(0, numberOfCards);
  const limitedEpisodes = shuffledEpisodes.slice(0, numberOfCards1);

  return (
    <>
      {limitedEpisodes.map((episode) => (
        <CardAll key={episode.id} episode={episode} user={limitedUsers[0]} />
      ))}
    </>
  );
  
}

export default App; 