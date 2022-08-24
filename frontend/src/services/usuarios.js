import axios from 'axios'

const baseUrl = "http://localhost:3001"

export async function obtenerUsuarios(){
    try{
        const response = await axios({
            url: `${baseUrl}/usuarios`,
            method: 'GET'
        })
        
        return response
  
    }catch(error){
      console.log(error)
    }
  }

  export async function agregarUsuario(value, setValue){
  
    try{
      const response = await axios({
          url: `${baseUrl}/usuarios`,
          method: 'POST',
          data: value
      })
      
      setValue({
        nombres: "",
        apellidos: "",
        email: "",
        user: "",
        password: "",
        tipoUsuario: 1
      })
  
      return response
  
    }catch(error){
      console.log(error)
      setValue({
        nombres: "",
        apellidos: "",
        email: "",
        user: "",
        password: "",
        tipoUsuario: 1
      })
    }
  }