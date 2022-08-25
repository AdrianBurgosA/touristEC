import { IonInput, IonItem, IonLabel, IonHeader, IonTitle, IonButton, IonToolbar, IonContent, IonAlert } from "@ionic/react";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import '../styles/login-page.css'
import { useHistory } from "react-router-dom";

const RegisterForm = (props) => {
    
    const usuarios = props.usuarios
    const usuario = props.usuario
    const setUsuario = props.setUsuario
    const handleSubmit = props.handleSubmit

    const [passwordValues, setPasswordValues] = useState({
        passwordSinConfirmacion: "",
        password: ""
    })
    const [validation, setValidation] = useState(true)
    const [alertaPassword, setAlertaPassword] = useState(false)
    const [alerta, setAlerta] = useState(false)
    const [alertaConfirmacion, setAlertaConfirmacion] = useState(false)
    const history = useHistory()
    
    const validar = () => {
        const userName = usuario.user
        const email = usuario.email
        var aux = 0

        for (var i = 0; i < usuarios.data.length; i++) {
            if (usuarios.data[i].user === userName || usuarios.data[i].email === email) {
                setValidation(false)
                
            }else if (usuarios.data[i].user !== userName && usuarios.data[i].email !== email) {
                aux++
            }
        }
        
        if (aux === usuarios.data.length) {
            setValidation(true)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        if (name === "password") {
            setPasswordValues({...passwordValues, [name]: value})
        }
        setUsuario({ ...usuario, [name]: value})
    }

    const handleChangePassword = (event) => {
        const { name, value } = event.target
        setPasswordValues({ ...passwordValues, [name]: value})
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()

        if (passwordValues.password !== passwordValues.passwordSinConfirmacion) {
            setAlertaPassword(true)

        }else if (validation === true && usuario.nombres !== "" && usuario.apellidos !== "" && usuario.email !== ""
            && usuario.user !==  "" && usuario.password !== "") {
            handleSubmit(usuario)
            setAlertaConfirmacion(true)

            setPasswordValues({
                passwordSinConfirmacion: "",
                password: ""
            })
        
        }else {
            setAlerta(true)
        }
    }

    const confirmacionCompletada = () => {
        setAlertaConfirmacion(false)
        history.push('/login')
    }

    return(
        <>
            <IonHeader>
                <IonToolbar>
                    
                    <IonTitle class='titulo'> 
                        Registro de usuario
                    </IonTitle>

                </IonToolbar>
            </IonHeader>

            <IonContent class="login-page">
                <br />

                <form onSubmit={handleSubmitInternal}>
                    <IonItem>
                        <IonLabel>Nombres: </IonLabel>
                        <IonInput id="nombres" name="nombres" value={usuario.nombres} onIonChange={handleChange}></IonInput>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Apellidos: </IonLabel>
                        <IonInput id="apellidos" name="apellidos" value={usuario.apellidos} onIonChange={handleChange}></IonInput>
                    </IonItem><br/>
                    
                    <IonItem>
                        <IonLabel>Correo: </IonLabel>
                        <IonInput id="email" name="email" value={usuario.email} onIonChange={handleChange} onIonBlur={validar}></IonInput>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Usuario: </IonLabel>
                        <IonInput id="user" name="user" value={usuario.user} onIonChange={handleChange} onIonBlur={validar}></IonInput>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Contraseña: </IonLabel>
                        <IonInput id="passwordSinConfirmacion" name="passwordSinConfirmacion" value={passwordValues.passwordSinConfirmacion} onIonChange={handleChange, handleChangePassword}></IonInput>
                    </IonItem><br/>
                    <IonItem>
                        <IonLabel>Confirmar contraseña: </IonLabel>
                        <IonInput id="password" name="password" value={usuario.password} onIonChange={handleChange}></IonInput>

                    </IonItem><br/>
                    <IonButton expand="block" color="light" type="submit">
                        Registrarse
                    </IonButton><br/>
                    <IonButton expand="block" color="dark" href="/login">
                        Volver
                    </IonButton>
                </form>
            </IonContent>

            <IonAlert
                isOpen={alertaPassword}
                onDidDismiss={() => setAlertaPassword(false)}
                header="Las contraseñas no coindicen"
                subHeader="¡Revise bien su información de registro!"
                buttons={['OK']}
            />

            <IonAlert
                isOpen={alerta}
                onDidDismiss={() => setAlerta(false)}
                header="Usuario o correo ya registrado"
                subHeader="Cambie su usuario y/o correo"
                buttons={['OK']}
            />

            <IonAlert
                isOpen={alertaConfirmacion}
                onDidDismiss = {confirmacionCompletada}
                header="Usuario registrado con éxito"
                subHeader="El usuario fue registrado en la BD"
                buttons={['OK']}
            />
        </>
    )
}

export default RegisterForm