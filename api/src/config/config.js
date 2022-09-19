require('dotenv').config();

const config = {
    port: process.env.PORT,
    name_db: process.env.DB_NAME,
    user_db: process.env.DB_USER,
    password_db: process.env.DB_PASSWORD,
    port_db: process.env.DB_PORT
}

module.exports = {config}