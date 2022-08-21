import { IonInput, IonItem, IonTitle,IonLabel, IonCard, IonButton,IonIcon } from "@ionic/react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { login } from "../services/login";
import { useHistory } from "react-router-dom";  
import '../styles/login-page.css'

const Login = () => {
    const [user, setUser] = useState({username: '', pass: ''})
    const history = useHistory()

    async function onHandleLogin(e){
        e.preventDefault()
        const response = await login(user,setUser)
        if(response.data.tipoUsuario === 1){
            history.push('/costa')
        }else{
            history.push('/costaAdmin')
        }
    }

    return(
        <>
            <div class="login-page">
                <center>
                    <FaUserCircle class="icon"/><br/>
                    <IonTitle>Iniciar Sesion</IonTitle><br/>
                </center>
                <IonItem class='item'>
                    <IonLabel>Usuario: </IonLabel><br/><br/>
                    <IonInput 
                        required 
                        value={user.username}
                        onIonChange={(event) => setUser({...user,username: event.target.value})}
                    />
                </IonItem><br/>
                <IonItem>
                    <IonLabel>Contraseña: </IonLabel>
                    <IonInput 
                        required 
                        type="password" 
                        value={user.pass}
                        onIonChange={(event) => setUser({...user,pass: event.target.value})}
                    />
                </IonItem><br/>
                <IonButton expand="block" color="light" onClick={onHandleLogin}>
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