import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Components/Nav';
import { PokemonProvider } from '../Context/PokemonContext';
import MyPokemonList from '../MyPokemonList/myPokemonList';
import PokemonDetail from '../PokemonDetail/pokemonDetail';
import PokemonList from '../PokemonList/pokemonList';

const Routes = () => {
  return (
    <PokemonProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <PokemonList />
          </Route>
          <Route path="/MyPokemonList" exact>
            <MyPokemonList />
          </Route>
          <Route path="/PokemonDetail/:id" exact>
            <PokemonDetail />
          </Route>
        </Switch>
      </Router>
    </PokemonProvider>
  );
};

export default Routes;
