const pool =require('../../databasePool');

class GenerationTable {
     static storeGeneration (generation ){
        pool.query(
            'INSERT INTO generation(generation) VALUES($1)',
    [generation.expiration],
    (error,response)=>{
        if(error ) return console.error (error);
    }
    );
  }
}

module.exports=GenerationTable;


// NODE POSTSQL HAS IT IS OWN WAY OF INTERPOLATION  
// YOU PROVIDE AN ARRAY As a seconed parameter  for the query function 
//  $1 will match the first value in the array 



// we make the method static so we can use it in the engin file without make an instenst of the generationtable class 
