import "./App.css";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";

function shuffleArray(array) {
  // Algoritmo de mezcla de Fisher-Yates
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [user, setuser] = useState([]);

  const [numberOfCards, setNumberOfCards] = useState(10); // Define el número deseado de cartas
  
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

  // Mezcla los usuarios de manera aleatoria
  const shuffledUsers = shuffleArray(user);

  // Utiliza slice para limitar la cantidad de cartas mostradas
  const limitedUsers = shuffledUsers.slice(0, numberOfCards);

  return (
    <>
      {limitedUsers.map((user) => (
        <Card key={user.name} user={user} />
      ))}
    </>
  );
}

export default App;