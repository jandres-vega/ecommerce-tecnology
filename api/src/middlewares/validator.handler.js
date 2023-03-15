const boom = require('@hapi/boom');

function validatorHandler (shemas, property) {
    console.log(shemas)
    return function (req, res, next) {
        const data = req[property];
        const {error} = shemas.validate(data, {abortEarly: false});
        if (error){
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;