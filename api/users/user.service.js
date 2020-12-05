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
        )},
     
    getUsers: callback => {
        pool.query(
            `SELECT id from signup`,
            [],
            (err, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUserByUserEmail: (email, callback) => {
        pool.query(
            `SELECT * FROM signup WHERE id = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                   return callback(error)
                }
                return callback(null, results)
            }
        )
    }

};