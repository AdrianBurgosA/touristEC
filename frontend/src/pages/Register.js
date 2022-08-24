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
    const [alerta, setAlerta] = useState(false)

    useEffect(() => {
        async function cargarUsuarios() {
            const data = await obtenerUsuarios()
            setUsuarios(data)
        }
        cargarUsuarios()
    }, [])

    async function handleSubmit(data) {
        const response = await agregarUsuario(data, setUsuario)

        if (response.status == 200) {
            setAlerta(true)
        }
    }

    return(
        <>
            <RegisterForm usuarios = {usuarios} usuario = {usuario} setUsuario = {setUsuario} handleSubmit = {handleSubmit} />
            
        </>
    )
}

export default Register