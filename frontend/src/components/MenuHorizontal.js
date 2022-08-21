import {
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
} from '@ionic/react'
import { skull, thunderstorm, bug, fish, exit } from 'ionicons/icons';

const MenuHorizontal = () => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="costa" href="/costa">
            <IonIcon icon={skull} />
            <IonLabel>Costa</IonLabel>
            </IonTabButton>

            <IonTabButton tab="sierra" href="/sierra">
            <IonIcon icon={thunderstorm} />
            <IonLabel>Sierra</IonLabel>
            </IonTabButton>

            <IonTabButton tab="oriente" href="/oriente">
            <IonIcon icon={bug} />
            <IonLabel>Oriente</IonLabel>
            </IonTabButton>

            <IonTabButton tab="galapagos" href="/galapagos">
            <IonIcon icon={fish} />
            <IonLabel>Galápagos</IonLabel>
            </IonTabButton>

            <IonTabButton tab="salir" href="/salir">
            <IonIcon icon={exit} />
            <IonLabel>Salir</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
}
export default MenuHorizontal