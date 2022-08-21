import axios from 'axios'

const baseUrl = "http://localhost:3001"

export async function obtenerSitiosTuristicos(ciudades){
    var sitiosTuristicos = []
    for (var i = 0; i < ciudades.length; i++) {
        try{
            const response = await axios({
                url: `${baseUrl}/sitiosTuristicos/${ciudades[i]._id}`,
                method: 'GET'
            })

            if (response.data.length === 1) {
                sitiosTuristicos.push(response.data[0])

            }else if (response.data.length > 1) {
                for (var j = 0; j < response.data.length; j++) {
                    sitiosTuristicos.push(response.data[j])
                }
            }
      
        }catch(error){
          console.log(error)
        }
    }

    return sitiosTuristicos
  }
  
  export async function obtenerSitioTuristicoPorId(id){
    try{
        const response = await axios({
            url: `${baseUrl}/sitiosTuristicos/${id}`,
            method: 'GET',
        })
        
        return response
  
    }catch(error){
      console.log(error)
    }
  }
  
  export async function agregarSitioTuristico(values, setValues){
  
    try{
      const response = await axios({
          url: `${baseUrl}/sitiosTuristicos`,
          method: 'POST',
          data: values,
      })
      
      setValues({
        nombre: '',
        descripcion: '',
        ciudad: '0',
        imagen: ''
      })
  
      return response
  
    }catch(error){
      console.log(error)
      setValues({
        nombre: '',
        descripcion: '',
        ciudad: '0',
        imagen: ''
      })
    }
  }
  
  export async function borrarSitioTuristico(id){
  
    const response = await axios.delete(`${baseUrl}/sitiosTuristicos/${id}`)
    .then(response => {
      window.alert('Registro eliminado')
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  export async function actualizarSitioTuristico(values){
  
    const response = await axios.put(`${baseUrl}/sitiosTuristicos/${values.id}`,{
      nombre: values.nombre,
      descripcion: values.descripcion,
      ciudad: values.ciudad,
      imagen: values.imagen
    })
    .then(response => {
      window.alert('Registro actualizado')
      window.location.reload()
    })
    .catch(error => {
      console.log(error)
    })
  }