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
    IonLabel
} from '@ionic/react'
import avatar from '../img/avatar.png'
import '../styles/login-page.css'

const PlacesComponent = (props) => {
    const sitiosTuristicos = props.sitiosTuristicos
    const ciudades = props.ciudades
    const region = props.region

    const obtenerCiudad = (ciudadId) => {
        for (var i = 0; i < ciudades.data.length; i++){
            if (ciudades.data[i]._id === ciudadId) {
                return ciudades.data[i].nombre
            }
        }
        
    }
    
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    
                    <div class='flex'>
                        <IonTitle class='titulo'> 
                            {region} 
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

            <IonContent >
                {
                    sitiosTuristicos.map(sitio => (
                        
                            <IonCard>
                                <IonItem>
                                    <img src = {sitio.imagen} />
                                </IonItem>

                                <IonCardHeader>
                                    <IonCardSubtitle> 
                                        {obtenerCiudad(sitio.ciudad)} 
                                    </IonCardSubtitle>
                                    <IonCardTitle> {sitio.nombre} </IonCardTitle>
                                </IonCardHeader> 

                                <IonCardContent>
                                    {sitio.descripcion}
                                </IonCardContent>

                            </IonCard>
                        
                    ))
                }
                
            </IonContent>
        </>
    )
}

export default PlacesComponent