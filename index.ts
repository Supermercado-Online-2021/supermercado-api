
require('dotenv').config();

import express, { Request, Response } from 'express';
import cors from 'cors';
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from './swagger.json';

import routes from './src/routes/';



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/api', routes);
app.use( '/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customSiteTitle: 'Supermercado Online API'}));

app.get( '*', ( req: Request, res: Response ) => {
    return res.status(404).json({
        error: 'Page not found',
        message: "Página não encontrada, consulte a documentação da api.",
        documentation: '/api/docs'
    });
}); 

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});
