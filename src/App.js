import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import Container from 'react-bootstrap/Container';
import { PokemonCard } from './components/PokemonCard';
import Alert from 'react-bootstrap/Alert';

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {


const [pokemonList, setPokemonList] = useState([]);
const [error, setError] = useState(false);


  useEffect(() => {
       getData();
    async function getData() {
      try {
        const response = await fetch(pokeApi);
      const data = await response.json();
      setPokemonList(data.results);
        } catch {
        setError(true);
      }
   
  }

}, []);


if(error){
  return (
    <div data-testid="app">
    <Navigation />
    <Container>
    <Alert variant="danger">
      Error: There was a problem fetching the pokemon data. 
    </Alert>
    </Container>

  </div>
  );
}

if(!pokemonList.length){
  return (
    <div data-testid="app">
    <Navigation />
    <Container>
    <Alert variant="info">
      Fetching the pokemon data... 
    </Alert>
    </Container>

  </div>
  );
}
  return (
    <div data-testid="app">
      <Navigation />
      <Container>
{pokemonList.map(pokemon => <PokemonCard key={pokemon.name} {...pokemon} />)}      </Container>
    </div>
  );
}

export { App };
