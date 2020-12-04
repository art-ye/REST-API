const { query } = require('express');
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
        )}

}