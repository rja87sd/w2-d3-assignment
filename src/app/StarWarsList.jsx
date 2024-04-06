"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function StarWarsList({ isLoggedIn }) {
  const [characterOne, setCharacterOne] = useState({});
  const [characterTwo, setCharacterTwo] = useState({});
  const [characterThree, setCharacterThree] = useState({});
  const [characterFour, setCharacterFour] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoggedIn) return;
    setIsLoading(true);
    async function getData(num, setData) {
      try {
        const response = await axios.get("https://swapi.dev/api/people/" + num);
        setData(response.data);
      } catch (error) {
        setError("Oops! Something went wrong. Try reloading the page.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => getData(1, setCharacterOne), 500);
    setTimeout(() => getData(2, setCharacterTwo), 1000);
    setTimeout(() => getData(3, setCharacterThree), 1500);
    setTimeout(() => getData(4, setCharacterFour), 2000);
  }, [isLoggedIn]);

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <h2>Star Wars Character List</h2>
      <h3>{characterOne.name}</h3>
      <p>Height: {characterOne.height}cm</p>
      <p>Mass: {characterOne.mass}kg</p>
      <p>Hair Color: {characterOne.hair_color}</p>
      <p>Eye Color: {characterOne.eye_color}</p>
      <p>Birth Year: {characterOne.birth_year}</p>
      <hr />
      <h3>{characterTwo.name}</h3>
      <p>Height: {characterTwo.height}cm</p>
      <p>Mass: {characterTwo.mass}kg</p>
      <p>Hair Color: {characterTwo.hair_color}</p>
      <p>Eye Color: {characterTwo.eye_color}</p>
      <p>Birth Year: {characterTwo.birth_year}</p>
      <hr />
      <h3>{characterThree.name}</h3>
      <p>Height: {characterThree.height}cm</p>
      <p>Mass: {characterThree.mass}kg</p>
      <p>Hair Color: {characterThree.hair_color}</p>
      <p>Eye Color: {characterThree.eye_color}</p>
      <p>Birth Year: {characterThree.birth_year}</p>
      <hr />
      <h3>{characterFour.name}</h3>
      <p>Height: {characterFour.height}cm</p>
      <p>Mass: {characterFour.mass}kg</p>
      <p>Hair Color: {characterFour.hair_color}</p>
      <p>Eye Color: {characterFour.eye_color}</p>
      <p>Birth Year: {characterFour.birth_year}</p>
    </div>
  );
}
