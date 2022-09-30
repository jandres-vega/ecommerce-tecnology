const app = require('./src/app');
const sequelize = require('./src/libs/conexion');
const {config} = require("./src/config/config");

sequelize.sync({force: false}).then(async () => {
    app.listen(config.port, () => {
        console.log('listen on port ' + config.port)
    });
})
