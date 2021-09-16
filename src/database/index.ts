
import { Options, Sequelize } from 'sequelize';
import { EnvironmentNameOptions, EnvironmentOptions } from "../types/SequelizeConfig"

import dbConfig from '../config/db.config';



const configurations = dbConfig as EnvironmentOptions;
const connectionName = (process.env.CONNECTION || 'development') as EnvironmentNameOptions
const connection: Options = configurations[connectionName];



const sequelize = new Sequelize(connection);

export default sequelize;
