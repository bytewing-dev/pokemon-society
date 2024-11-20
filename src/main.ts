import express, { Express, Request, Response } from 'express';
import Logger from "./logger";
import dotenv from 'dotenv';
import { pkmnRouter } from './routes/pkmn_routes';
import { typeRouter } from './routes/types_routes';
import bodyParser from 'body-parser';

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to our API :)');
    Logger.info('Connexion to API established.');
});


app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use(pkmnRouter);
app.use(typeRouter);


app.listen(port, () => {
    Logger.debug(`Server is up and running @ http://localhost:${port}.`);
});
