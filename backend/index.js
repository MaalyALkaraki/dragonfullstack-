
const GenerationEngine =require('./engine');
const engine=new GenerationEngine();
engine.start();
setTimeout(()=>{
    engine.stop();
},20000);






// const Generation =require('./genaration')
// const generation = new Generation ;
// console.log ('generation' ,generation);

// const goopy =generation.newDragon();
// console.log('goopy',goopy);

// setTimeout(()=>{
//     const mimar =generation.newDragon();
//     console.log('mimar',mimar);   
// },15000);





// const Dragon=require('./dragon')
// // console.log("hello Node.js");

// const fooey = new Dragon(
//     {
//         birthdate:new Date(),
//     nickname:'feeoy'
//     })
// const baloo=new Dragon(
//     {
//     birthdate:new Date(),
//     nickname:'baloo'
//     }
//     );
// const mimar= new Dragon ();
// setTimeout(()=>{
// const gooby = new Dragon ();
// console.log('gooby' ,gooby);
// },3000);

// console.log('fooey' ,fooey);

// console.log('baloo' ,baloo);
// console.log('mimar' ,mimar);
