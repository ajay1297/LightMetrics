'use strict'
const user_model = require('../database/models/user_model')

class UserManagement {
    /**
     * Create User Function
     * @param {*} req 
     * @param {*} res 
     */
    async createUser(req, res) {
        try {
            let {name, password, email} = req.body;
            if(name == null || password == null || email == null) {
                return res.status(200).send(`Please send required params`);
            }
            let user = new user_model({name, password, email});
            let userObj = await user.save();
            return res.status(200).send(`User Registered with ID : ${userObj.userid}`);
        }
        catch(error) {
            console.log(error.message);
            return res.status(500).send('Server Error');
        }
    }
}


module.exports = new UserManagement();