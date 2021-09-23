import {createStore,combineReducers} from 'redux';
import CitasReducer from '../reducers/CitasReducer'
import { obtenerStateStorage, guardarStateStorage } from '../LocalStorage';



const reducers = combineReducers({
    citas: CitasReducer //propiedades que necesitamos, si tuviera mas opciones las pongo aca mismo
    //puedo combinar varios reducer, ejemplo: usuario: usuarioReducer etc etc
})


//storageState
const storageState = obtenerStateStorage()

export const store = createStore(
    reducers, //primer argumento
    storageState, //lo que tenemos en localStorage
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     //configura los devtoolls de microsoft edge redux
);

// store.subscribe(()=>{
//     guardarStateStorage({
//       citas: store.getState().citas
//     })
//   })

//este archivo es donde esta toda la informacion que necesitemos para nuestra app