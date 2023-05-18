//esta f se encargara de enviar la rta - unifica la rta a dar
module.exports = (res, statusCode, data) => { //cada vez que querramos enviar una rta - reutilizariamos esta function 
    res.status(statusCode).json({
        error: false,  //para que el cliente chequee en el objeto el error 
        data,

    });
};
