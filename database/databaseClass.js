const mysql = require( 'mysql' );
const { reject } = require('lodash');

module.exports =  class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    databaseExists(dbname){
        let existQuery= "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = \'".concat(dbname).concat("\'");
        return new Promise ( (resolve, reject) => {
            this.query(existQuery).then( (result,err) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.length==1)
            })
        })
    }
    createDatabase(dbname){
        let createQuery = "CREATE DATABASE \`".concat(dbname).concat("\`");
        return new Promise ( (resolve,rejecct) => {
            this.query(createQuery).then( (result,err) => {
                if (err) return reject(err);
                return resolve(result);
            })
        })
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
