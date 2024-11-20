import express, { Express, Request, Response } from 'express';
import { QueryResult } from 'mysql2';
import { allTypes, typeById, typeByName } from '../models/types_model';


export const getAllTypes = ( async (req: Request, res: Response) => {
    try {
        const types: QueryResult = await allTypes();
        res.json(types);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getTypeById = (async (req: Request, res: Response) => {
    try {
        const type_id: string = req.params.id;
        const typeId: QueryResult = await typeById(type_id);
        res.json(typeId);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});


export const getTypeByName = (async (req: Request, res: Response) => {
    try {
        const type_identifier: string = req.params.identifier;
        const typeName: QueryResult = await typeByName(type_identifier);
        res.json(typeName);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});
