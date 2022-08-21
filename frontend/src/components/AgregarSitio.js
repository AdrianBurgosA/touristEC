import {
    IonSelect,
    IonSelectOption,
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

const AgregarSitio = (props) => {

    const ciudades = props.ciudades
    const sitioTuristico = props.sitioTuristico
    const setSitioTuristico = props.setSitioTuristico
    const handleSubmit = props.handleSubmit

    const handleChange = (event) => {
        const { name, value } = event.target
        setSitioTuristico({ ...sitioTuristico, [name]: value})
        console.log(sitioTuristico)
    }

    const handleSubmitInternal = (e) => {
        e.preventDefault()
        handleSubmit(sitioTuristico)
    }
    

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
                <form onSubmit={handleSubmitInternal}>

                    <br />
                    <IonItem>
                        <IonLabel>Sitio turístico: </IonLabel>
                        <IonInput id="nombre" name="nombre" value={sitioTuristico.nombre} onIonChange={handleChange}></IonInput>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Ciudad: </IonLabel>
                        <IonSelect placeholder="Escoja una ciudad" id="ciudad" name="ciudad" value={sitioTuristico.ciudad} onIonChange={handleChange}>

                            {
                                ciudades.map(ciudad => (
                                    
                                    <IonSelectOption value={ciudad._id}> {ciudad.nombre} </IonSelectOption>

                                ))
                            }

                        </IonSelect>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Descripción: </IonLabel>
                        <IonInput id="descripcion" name="descripcion" value={sitioTuristico.descripcion} onIonChange={handleChange}></IonInput>
                    </IonItem><br/>

                    <IonItem>
                        <IonLabel>Link imagen: </IonLabel>
                        <IonInput id="imagen" name="imagen" value={sitioTuristico.imagen} onIonChange={handleChange}></IonInput>
                    </IonItem><br/>
                    
                    <IonButton expand="block" color="light" type='submit'>
                        Registrarse
                    </IonButton><br/>
                </form>
                
            </IonContent>
        </>
    )
}

export default AgregarSitio