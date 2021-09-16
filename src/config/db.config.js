
module.exports = {
    development: {
        host: process.env.DEV_HOST,
        port: process.env.DEV_DB_PORT,
        database: process.env.DEV_DATABASE,
        username: process.env.DEV_USERNAME,
        password: process.env.DEV_PASSWORD,
        dialect: process.env.DEV_DIALECT
    },
    production: {
        host: process.env.PROD_HOST,
        port: process.env.PROD_DB_PORT,
        database: process.env.PROD_DATABASE,
        username: process.env.PROD_USERNAME,
        password: process.env.PROD_PASSWORD,
        dialect: process.env.PROD_DIALECT
    }
}
