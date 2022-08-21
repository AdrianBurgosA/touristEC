import { IonInput, IonItem, IonTitle,IonLabel, IonCard, IonButton,IonIcon } from "@ionic/react";
import { FaUserCircle } from "react-icons/fa";
import '../styles/login-page.css'

const Login = () => {
    return(
        <>
            <div class="login-page">
                <center>
                    <FaUserCircle class="icon"/><br/>
                    <IonTitle>Iniciar Sesion</IonTitle><br/>
                </center>
                <IonItem class='item'>
                    <IonLabel>Usuario: </IonLabel><br/><br/>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Contraseña: </IonLabel>
                    <IonInput></IonInput>
                </IonItem><br/>
                <IonButton expand="block" color="light">
                    Iniciar Sesion
                </IonButton><br/>
                <IonButton expand="block" color="dark">
                    Registrarse
                </IonButton>
            </div>
        </>
    )
}

export default Login