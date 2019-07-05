const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration');

const pool = new Pool(databaseConfiguration);

module.exports = pool;




// next we debug the code to check if it is working 
// note the i used node in git bash to test since i had proplem with windows 7 with npm 

// pool.query('SELECT * FROM generation',(error,response)=>{
//     if (error) return console.log('error',error);
//     console.log('response.rows',response.rows);
// });

// node databasePool.js
// the result was 
// response.rows [] 

// and tried to force an error like so 
// pool.query('SELECT foo FROM generation',(error,response)=>{
//     if (error) return console.log('error',error);
//     console.log('response.rows',response.rows);
// });
// so it gave an error 