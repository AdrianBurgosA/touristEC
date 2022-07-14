import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';

const Menu = () => {
    return(
        <>
            <IonMenu side="start" menuId="custom" className="my-custom-menu">
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle>Custom Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
            </IonMenu>
        </>
    )
}

export default Menu