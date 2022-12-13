import React from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const params = useParams();
  return <div>character con el id {params.id}</div>;
};

export default Character;
