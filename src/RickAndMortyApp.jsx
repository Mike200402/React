import CharacterSection from "./components/CharacterSection";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
function RickAndMortyApp() {
    const [character, setCharacter] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();
    const id=searchParams.get("id")

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((Response) => Response.json())
            .then((data) => {
                setCharacter(data);
                // console.log(data);
                fetchEpisodes(data.episode.slice(0, 5)); // Obtener los primeros 4 episodios
            });
    }, []);

    const fetchEpisodes = (episodesUrls) => {
        const promesas = episodesUrls.map((url) =>
            fetch(url).then((response) => response.json())
        );

        Promise.all(promesas)
            .then((episodios) => {
                setEpisodes(episodios);
                // console.log(episodios);
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            {character && (
                <CharacterSection
                    key={character.id}
                    character={character}
                    episodes={episodes}
                />
            )}
        </>
    );
}

export default RickAndMortyApp;