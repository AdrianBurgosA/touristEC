import { IonInput, IonItem, IonLabel, IonCard, IonButton, IonIcon } from "@ionic/react";
import { star } from 'ionicons/icons';

const Login: React.FC = () => {
    return(
        <>
            <IonCard>
                <IonIcon slot="end" icon={star} />
                <IonItem>
                    <IonLabel>Usuario: </IonLabel><br/><br/>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel>Contraseña: </IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonButton expand="block" color="light">
                    Iniciar Sesion
                </IonButton>
                <IonButton expand="block" color="dark">
                    Registrarse
                </IonButton>
            </IonCard>
        </>
    )
}

export default Login;