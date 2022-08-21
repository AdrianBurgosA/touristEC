const moongose = require("mongoose")

const usuariosSchema = moongose.Schema({

    nombres:{
        type: 'string',
        required: true
    },
    apellidos:{
        type:'string',
        required: true,
    },
    email:{
        type: 'string',
        required: true
    },
    tipoUsuario:{
        type: 'number',
        required: true
    }

})

module.exports = moongose.model('usuarios', usuariosSchema, 'Usuarios')