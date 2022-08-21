import {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
} from '@ionic/react'
import { sunny, thunderstorm, bug, fish, add, exit } from 'ionicons/icons';

const MenuHorizontalAdmin = () => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="costa" href="/costaAdmin">
                <IonIcon icon={sunny} />
                <IonLabel>Costa</IonLabel>
            </IonTabButton>

            <IonTabButton tab="sierra" href="/sierraAdmin">
                <IonIcon icon={thunderstorm} />
                <IonLabel>Sierra</IonLabel>
            </IonTabButton>

            <IonTabButton tab="oriente" href="/orienteAdmin">
                <IonIcon icon={bug} />
                <IonLabel>Oriente</IonLabel>
            </IonTabButton>

            <IonTabButton tab="galapagos" href="/galapagosAdmin">
                <IonIcon icon={fish} />
                <IonLabel>Galápagos</IonLabel>
            </IonTabButton>

            <IonTabButton tab="agregar" href="/agregar">
                <IonIcon icon={add} />
                <IonLabel>Agregar</IonLabel>
            </IonTabButton>

            <IonTabButton tab="salir" href="/">
                <IonIcon icon={exit} />
                <IonLabel>Salir</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
}
export default MenuHorizontalAdmin