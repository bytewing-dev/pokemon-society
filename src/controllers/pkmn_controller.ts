import { Request, Response } from 'express';
import { QueryResult } from 'mysql2';
import { allPokemons, pokemonById, pokemonByName, pokemonType, pokemonsOf, pokemonMoves, pokemonEggs, newPokemon, erasePokemon } from '../models/pkmn_model';


export const getAllPokemons = (async (req: Request, res: Response) => {
    try {
        const pokemons: QueryResult = await allPokemons();
        res.json(pokemons);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonById = (async (req: Request, res: Response) => {
    try {
        const pkmn_id: string = req.params.id;
        const pokemonId: QueryResult = await pokemonById(pkmn_id);
        res.json(pokemonId);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonByName = (async (req: Request, res: Response) => {
    try {
        const pkmn_identifier: string = req.params.identifier;
        const pokemonName: QueryResult = await pokemonByName(pkmn_identifier);
        res.json(pokemonName);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonType = (async (req: Request, res: Response) => {
    try {
        const pkmn_identifier: string = req.params.identifier;
        const typeOf: QueryResult = await pokemonType(pkmn_identifier);
        res.json(typeOf);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonsOfType = (async (req: Request, res: Response) => {
    try {
        const type_identifier: string = req.params.identifier;
        const pokemonsOfType: QueryResult = await pokemonsOf(type_identifier);
        res.json(pokemonsOfType);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonsMoves = (async (req: Request, res: Response) => {
    try {
        const pkmn_identifier: string = req.params.identifier;
        const movesOf: QueryResult = await pokemonMoves(pkmn_identifier);
        res.json(movesOf);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getPokemonsEggs = (async (req: Request, res: Response) => {
    try {
        const pkmn_identifier: string = req.params.identifier;
        const eggsOf: QueryResult = await pokemonEggs(pkmn_identifier);
        res.json(eggsOf);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const createNewPokemon = (async (req: Request, res: Response) => {
    try {
        const {id, identifier, species_id, height, weight, base_experience, order, is_default } = req.body;
        const createdPkmn: QueryResult = await newPokemon( id, identifier, species_id, height, weight, base_experience, order, is_default);
        res.send(createdPkmn);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const deletePokemon = (async (req: Request, res: Response) => {
    try {
        const pkmn_identifier: string = req.params.identifier;
        const deletedPokemon: QueryResult = await erasePokemon(pkmn_identifier);
        res.json(deletedPokemon);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
