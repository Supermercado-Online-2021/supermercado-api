
import { Options } from 'sequelize';



export interface EnvironmentOptions  {
    development: Options,
    production: Options
}

export type EnvironmentNameOptions = 'development'| 'production';
