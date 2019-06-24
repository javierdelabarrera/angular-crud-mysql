import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database); 

pool.getConnection()
    .then(connection => { // ya que promise-mysql soporta promesas
        pool.releaseConnection(connection); //si hay conexion, la lanzo con la connection que recibi
        console.log('DB is connected');
    }); 

export default pool;