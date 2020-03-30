import UserService from './../services/userService'
import Controller from './globalController';
import User from './../models/User';
import _ from 'lodash';
import bcrypt from 'bcrypt'


const userService = new UserService(
    new User().userInstance()

)

class UserController extends Controller {
    constructor(service) {
        super(service)

    }
//   loginUser(usr){
//        console.log(usr);
       
//     }

}


export default new UserController(userService);