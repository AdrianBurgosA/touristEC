import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItem, 
    IonCardSubtitle, 
    IonCardTitle, 
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonAvatar,
    IonChip,
    IonLabel,
    IonButton,
    IonInput
} from '@ionic/react'
import avatar from '../img/avatar.png'
import '../styles/login-page.css'
import '../styles/login-page.css'

const AgregarSitioTuristico = () => {
    return(
        <>
            <IonHeader>
                <IonToolbar>
                    
                    <div class='flex'>
                        <IonTitle class='titulo'> 
                            Agregar sitio turistico 
                        </IonTitle>
                        
                        <IonChip outline={true} class='chip'>
                            <IonAvatar>
                                <img src = {avatar} />
                            </IonAvatar>
                            <IonLabel>Perfil</IonLabel>
                        </IonChip>

                    </div>

                </IonToolbar>
            </IonHeader>

            <IonContent class="login-page">
                
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
            </IonContent>
        </>
    )
}

export default AgregarSitioTuristico