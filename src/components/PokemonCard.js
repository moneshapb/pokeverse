import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';

function PokemonCard({ url, name }) {
const [pokemon, setPokemon] = useState(null);
const [error, setError] = useState(false);


  useEffect(() => {
       getData();
    async function getData() {
      try {
        const response = await fetch(url);
      const data = await response.json();
      setPokemon({ abilities: data.abilities,
        sprites: data.sprites });
        } catch {
        setError(true);
      }
   
  }

}, [url]);

if (error) {
  return (
    <Card>
      <Card.Body>
        <Alert variant="danger"> 
        <Card.Title>Error</Card.Title>
        <Card.Text>
        Error: There was a problem fetching this pokemon.
        </Card.Text>
        </Alert>
      </Card.Body>
    </Card>
  );
}

if (!pokemon) {
  return (
    <Card>
      <Card.Body>
        <Alert variant="info"> 
        <Card.Title>Loading...</Card.Title>
        <Card.Text>
        Fetching Pokemon Data...
        </Card.Text>
        </Alert>
      </Card.Body>
    </Card>
  );
}
  return (
    <Card>
      <Card.Img variant="top" src={pokemon.sprites.front_default}/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>          
        </Card.Text>
      </Card.Body>
    </Card>
  );
 
}

export { PokemonCard };
