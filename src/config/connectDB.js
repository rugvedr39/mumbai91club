const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'lot'
    host: 'localhost',
    user: 'root',
    password: '8600988002',
    database: 'tc-lottery'
});
// "start": "pm2 start src/server.js"

export default connection;
