import {useEffect, useState} from 'react'
import {
    IonPage
} from '@ionic/react'
import Menu from '../components/Menu'
import MenuHorizontalAdmin from '../components/MenuHorizontalAdmin'
import { obtenerCiudades } from '../services/ciudades'
import { obtenerSitiosTuristicos } from '../services/sitiosTuristicos'
import PlacesComponent from '../components/PlacesComponent'

const Places = () => {
    const [ciudades, setCiudades] = useState([])
    const [sitiosTuristicos, setSitiosTuristicos] = useState([])

    useEffect(() => {
        async function cargarCiudades() {
            const data = await obtenerCiudades("Oriente")
            setCiudades(data)
        }
        cargarCiudades()
    }, [])

    useEffect(() => {
        async function cargarSitiosTuristicos() {
            const data = await obtenerSitiosTuristicos(ciudades.data)
            setSitiosTuristicos(data)
        }
        cargarSitiosTuristicos()
    }, [ciudades])

    return(

        <IonPage>
            <PlacesComponent sitiosTuristicos = {sitiosTuristicos} ciudades = {ciudades} region = "Oriente" />
            
            <MenuHorizontalAdmin />
        </IonPage>
    )
}

export default Places