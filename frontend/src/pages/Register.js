import RegisterForm from "../components/RegisterForm"
import { useState, useEffect } from "react"
import { obtenerUsuarios, agregarUsuario } from "../services/usuarios" 

const Register = () => {
    
    const [usuarios, setUsuarios] = useState([])
    const [usuario, setUsuario] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        user: "",
        password: "",
        tipoUsuario: 1
    })

    useEffect(() => {
        async function cargarUsuarios() {
            const data = await obtenerUsuarios()
            setUsuarios(data)
        }
        cargarUsuarios()
    }, [])

    async function handleSubmit(data) {
        const response = await agregarUsuario(data, setUsuario)
    }

    return(
        <>
            <RegisterForm usuarios = {usuarios} usuario = {usuario} setUsuario = {setUsuario} handleSubmit = {handleSubmit} />
            
        </>
    )
}

export default Register