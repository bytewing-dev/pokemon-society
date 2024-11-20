import express from 'express';
import { getAllTypes, getTypeById, getTypeByName } from '../controllers/types_controller';

export const typeRouter = express.Router();

typeRouter.get('/type', getAllTypes);

typeRouter.get('/type/id/:id', getTypeById);

typeRouter.get('/type/identifier/:identifier', getTypeByName);
