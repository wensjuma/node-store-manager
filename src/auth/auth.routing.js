const verifyUser = require('./controllers/auth.controller');
const authController = require('./middleware/verify-user');
// const AuthValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
exports.routesConfig = function(server) {

    server.post('/auth/login', [
        verifyUser.hasAuthValidFields,
        verifyUser.isPasswordAndUserMatch,
        authController.login
    ]);

//     server.post('/auth/refresh', [
//         AuthValidationMiddleware.validJWTNeeded,
//         AuthValidationMiddleware.verifyRefreshBodyField,
//         AuthValidationMiddleware.validRefreshNeeded,
//         AuthorizationController.login
//     ]);
//     server.get('/authenticated', (req, res)=>{
//         res.send({
//             message:'Welcome authenticated !'
//         })
//     }
//    )
 };