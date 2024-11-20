import { FieldPacket, QueryResult } from "mysql2/promise";
import pool from "../database";


export async function allTypes(): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM types');
    return rows;
};


export async function typeById(type_id: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM types WHERE id = ?', [type_id]);
    return rows;
};


export async function typeByName(type_identifier: string): Promise<QueryResult> {
    const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM types WHERE identifier = ?', [type_identifier]);
    return rows;
};
