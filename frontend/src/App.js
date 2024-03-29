import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import './styles/login-page.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import PlacesCosta from './pages/PlacesCosta'
import PlacesCostaAdmin from './pages/PlacesCostaAdmin'
import PlacesSierra from './pages/PlacesSierra'
import PlacesSierraAdmin from './pages/PlacesSierraAdmin'
import PlacesOriente from './pages/PlacesOriente'
import PlacesOrienteAdmin from './pages/PlacesOrienteAdmin'
import PlacesGalapagos from './pages/PlacesGalapagos'
import PlacesGalapagosAdmin from './pages/PlacesGalapagosAdmin'
import AgregarSitioTuristico from './pages/AgregarSitioTuristico'

setupIonicReact();

const App = () => {
  return (
    <IonApp class='scroll-content'>

      <IonReactRouter>

        <IonRouterOutlet id='menu1'>
          <Route path='/' component={Login} exact />
          <Route path='/registro' component={Register} exact />
          <Route path='/perfil' component={Perfil} exact />
          <Route path='/costa' component={PlacesCosta} exact />
          <Route path='/costaAdmin' component={PlacesCostaAdmin} exact />
          <Route path='/sierra' component={PlacesSierra} exact />
          <Route path='/sierraAdmin' component={PlacesSierraAdmin} exact />
          <Route path='/oriente' component={PlacesOriente} exact />
          <Route path='/orienteAdmin' component={PlacesOrienteAdmin} exact />
          <Route path='/galapagos' component={PlacesGalapagos} exact />
          <Route path='/galapagosAdmin' component={PlacesGalapagosAdmin} exact />
          <Route path='/agregar' component={AgregarSitioTuristico} exact />
          <Redirect to='/' />
        </IonRouterOutlet>

      </IonReactRouter>

    </IonApp>
  )
}

export default App