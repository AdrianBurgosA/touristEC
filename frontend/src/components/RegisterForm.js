import { IonInput, IonItem, IonLabel, IonCard, IonTitle, IonButton,IonIcon } from "@ionic/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import '../styles/login-page.css'

const RegisterForm = () => {
    return(
        <>
            <div class="login-page">
                <center><IonTitle>Registro</IonTitle></center><br/>
                <IonItem>
                    <IonLabel>Usuario: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Correo: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Nombre: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Apellido: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Fecha de nacimiento: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Contraseña: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Confirmar contraseña: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonButton expand="block" color="light">
                    Registrarse
                </IonButton><br/>
                <IonButton expand="block" color="dark">
                    Volver
                </IonButton>
            </div>
        </>
    )
}

export default RegisterForm