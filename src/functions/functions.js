import axios from "axios";

const charactersAPI = async (state) => {
  const url = await axios.get("https://rickandmortyapi.com/api/character");
  state(url.data.results);
};

const 

export { charactersAPI };
