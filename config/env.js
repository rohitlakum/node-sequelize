require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    NODE_ENV: process.env.NODE_ENV
}
