import { IonPage, IonAlert } from "@ionic/react"
import { useState, useEffect } from "react"
import AgregarSitio from "../components/AgregarSitio"
import MenuHorizontalAdmin from '../components/MenuHorizontalAdmin'
import { obtenerTodasCiudades } from '../services/ciudades'
import { agregarSitioTuristico } from "../services/sitiosTuristicos"

const AgregarSitioTuristico = () => {

    const [ciudades, setCiudades] = useState([])
    const [sitioTuristico, setSitioTuristico] = useState({
        nombre: "",
        ciudad: "",
        descripcion: "",
        imagen: ""
    })
    const [alerta, setAlerta] = useState(false)

    useEffect(() => {
        async function cargarCiudades() {
            const data = await obtenerTodasCiudades()
            setCiudades(data.data)
        }
        cargarCiudades()
    }, [])

    async function handleSubmit(data) {
        const response = await agregarSitioTuristico(sitioTuristico, setSitioTuristico)

        if (response.status == 200) {
            setAlerta(true)
        }
    }

    return(
        <IonPage>
            <AgregarSitio 
                ciudades = {ciudades} 
                sitioTuristico = {sitioTuristico}
                setSitioTuristico = {setSitioTuristico}
                handleSubmit = {handleSubmit}
            />
            <IonAlert
                isOpen={alerta}
                onDidDismiss={() => setAlerta(false)}
                header="Registro correcto!"
                subHeader="Sitio turístico guardado"
                buttons={['OK']}
            />
            <MenuHorizontalAdmin />

        </IonPage>
        
    )
}

export default AgregarSitioTuristico