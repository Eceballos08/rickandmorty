import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { charactersAPI } from "../functions/functions";

const Home = () => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    charactersAPI(setCharacters);
  }, []);

  return (
    <>
      {characters != null
        ? characters.map((character) => (
            <div key={character.id}>
              <a href={`/character/${character.id}`}>{character.name}</a>
              <img src={character.image} />
            </div>
          ))
        : "no hay personajes"}
    </>
  );
};

export default Home;
