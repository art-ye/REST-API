const { create } = require('./user.service');

const { genSaltSync, hashSync } = require('bcrypt');

module.exports = {
    createUser: (req, res) => {
        const body  = req.body;
        const salt  = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err,result) => {
            if(err) {
                console.log(err);
                return res.status(500).JSON({
                    success: 0,
                    message: 'Datebase connection error'
                });
            }
            return res.status(200).JSON({
                success: 1,
                data: results
            })
        })
    }
}