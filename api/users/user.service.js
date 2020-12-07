const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `INSERT INTO signup(id, password)
             VALUES(?,?)`, 
             [
                 data.id,
                 data.password
             ],
             (error, results, fields) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
             }
        )},
     
    getUserByUserEmail: (id, callback) => {
        pool.query(
            `SELECT * FROM signup WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                   callback(error)
                }
                return callback(null, results[0])
            }
        )
    }

};