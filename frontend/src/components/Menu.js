import {
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuToggle,
  IonRouterOutlet
 } from '@ionic/react'
import {person, exit} from 'ionicons/icons'

const Menu = () => {
    return(
      <>
        <IonMenu side="start" contentId="menu1">

          <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Menu de inicio</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            <IonList>

              <IonMenuToggle>
                <IonItem routerLink='/perfil' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={person} />
                  <IonLabel>Perfil</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle>
                <IonItem routerLink='/perfil' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={exit} />
                  <IonLabel>Salir</IonLabel>
                </IonItem>
              </IonMenuToggle>

            </IonList>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet></IonRouterOutlet>
      </>
      
    )
}

export default Menu