import { IonPage } from "@ionic/react"
import AgregarSitio from "../components/AgregarSitio"
import MenuHorizontalAdmin from '../components/MenuHorizontalAdmin'

const AgregarSitioTuristico = () => {
    return(
        <IonPage>
            <AgregarSitio />
            <MenuHorizontalAdmin />

        </IonPage>
        
    )
}

export default AgregarSitioTuristico