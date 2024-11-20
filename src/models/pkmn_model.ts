import { FieldPacket, QueryResult } from "mysql2/promise";
import pool from "../database";


export async function allPokemons(): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM pokemon');
    return rows;
};


export async function pokemonById(pkmn_id: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM pokemon WHERE id = ?', [pkmn_id]);
    return rows;
};


export async function pokemonByName(pkmn_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM pokemon WHERE identifier = ?', [pkmn_identifier]);
    return rows;
};


export async function pokemonType(pkmn_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query(`
    SELECT types.identifier 
    FROM types 
    JOIN pokemon_types ON pokemon_types.type_id=types.id 
    JOIN pokemon ON pokemon.id=pokemon_types.pokemon_id 
    WHERE pokemon.identifier = ?`, [pkmn_identifier]);
    return rows;
};


export async function pokemonsOf(type_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query(`
    SELECT pokemon.identifier
    FROM pokemon
    JOIN pokemon_types ON pokemon_types.pokemon_id=pokemon.id
    JOIN types ON types.id=pokemon_types.type_id
    WHERE types.identifier = ?
    `, [type_identifier]);
    return rows;
};


export async function pokemonMoves(pkmn_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query(`
    SELECT moves.identifier 
    FROM moves
    JOIN pokemon_moves ON pokemon_moves.move_id=moves.id
    JOIN pokemon ON pokemon.id=pokemon_moves.pokemon_id 
    WHERE pokemon.identifier = ?
    `, [pkmn_identifier]);
    return rows;
};


export async function pokemonEggs(pkmn_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query(`
    SELECT egg_groups.identifier 
    FROM egg_groups 
    JOIN pokemon_egg_groups ON egg_groups.id = pokemon_egg_groups.egg_group_id 
    JOIN pokemon ON pokemon.id = pokemon_egg_groups.species_id 
    WHERE pokemon.identifier = ?
    `, [pkmn_identifier]);
    return rows;
};


export async function newPokemon(id:number, identifier: string, species_id: number, height: number, weight: number, base_experience: number, order: number, is_default: number): Promise<QueryResult> {
    const [newPkmn] = await pool.query(`
    INSERT INTO pokemon (id, identifier, species_id, height, weight, base_experience, \`order\`, is_default)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [id , identifier, species_id, height, weight, base_experience, order, is_default]);
    return newPkmn;
}


export async function erasePokemon(pkmn_identifier: string): Promise<QueryResult> {
    const [erasedPkmn] = await pool.query('DELETE FROM pokemon WHERE identifier = ?', [pkmn_identifier]);
    return erasedPkmn;
}
