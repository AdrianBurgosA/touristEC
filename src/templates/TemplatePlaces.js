import {
    IonPage
} from '@ionic/react'
import Menu from '../components/Menu'
import MenuHorizontal from '../components/MenuHorizontal'

const TemplatePlaces = (props) => {

    return(
        <IonPage>
            {
                props.children
            }
            <Menu />
            <MenuHorizontal />
            
        </IonPage>
    )
}

export default TemplatePlaces