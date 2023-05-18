// module.exports = (fn) => { //fn--> funcion controladora
// return function(req,res,next){//funcion promesa y async 
//     fn(req,res).catch((err)=>{
//         next(err) //salta al manejador de errores de express
//     }) 

// }
// };
module.exports= (fn) => (req, res, next) =>
fn(req,res).catch((err) => next(err));

//version simplificada:
//(fn) =>(req,res,next)=> fn().catch((err)=> next(err));