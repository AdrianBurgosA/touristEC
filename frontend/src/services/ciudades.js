import axios from 'axios'

const baseUrl = "http://localhost:3001"

export async function obtenerCiudades(region){
    try{
        const response = await axios({
            url: `${baseUrl}/ciudades/${region}`,
            method: 'GET'
        })
        
        return response
  
    }catch(error){
      console.log(error)
    }
  }
  
  