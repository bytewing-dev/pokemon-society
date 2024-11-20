import express, { Router } from 'express';
import { getAllPokemons, getPokemonById, getPokemonByName, getPokemonType, getPokemonsOfType, getPokemonsMoves, getPokemonsEggs, createNewPokemon, deletePokemon } from '../controllers/pkmn_controller';

export const pkmnRouter: Router = express.Router();

pkmnRouter.get('/pokemon', getAllPokemons);

pkmnRouter.get('/pokemon/id/:id', getPokemonById);

pkmnRouter.get('/pokemon/identifier/:identifier', getPokemonByName);

pkmnRouter.get('/pokemon/typeof/:identifier', getPokemonType);

pkmnRouter.get('/type/pokemonof/:identifier', getPokemonsOfType);

pkmnRouter.get('/pokemon/movesof/:identifier', getPokemonsMoves);

pkmnRouter.get('/pokemon/eggsof/:identifier', getPokemonsEggs);

pkmnRouter.post('/pokemon', createNewPokemon);

pkmnRouter.delete('/pokemon/identifier/:identifier', deletePokemon);
