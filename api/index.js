const express = require('express');
const sequelize = require('./src/libs/conexion');
const {config} = require("./src/config/config");
const {routes} = require('./src/routes/index');
let app = express();

// app.get('/', (req, res) => {
//     res.send("Hola Mundo");
// })
app.use(express.json())

routes(app)



sequelize.sync({force: true}).then(async () => {
    app.listen(config.port, () => {
        console.log('listen on port ' + config.port)
    });
})
