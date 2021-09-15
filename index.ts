
require('dotenv').config();

import express from 'express';
const swaggerUi = require('swagger-ui-express');
import swaggerDocument from './swagger.json';

import routes from '@Routes/index'



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/api', routes);
app.use( '/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});