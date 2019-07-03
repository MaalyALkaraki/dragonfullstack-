const express =require('express');
const dragonRouter =require ('./api/dragon');
const generationRouter =require ('./api/generation');
const app=express();

const GenerationEngine =require('./generation/engine');
const engine=new GenerationEngine();


app.locals.engine=engine; //since we cant make a cyrcular call from this file to the dragon .js router we can use app.locals to make the engin accessible 
app.use('/dragon',dragonRouter);
app.use('/generation',generationRouter);
 engine.start();


module.exports=app;

