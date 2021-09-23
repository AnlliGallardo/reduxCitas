import React from "react";
import AgregarCitas from "../components/AgregarCitas";
import ListarCitas from "../components/ListarCitas"
import {store} from "../store/store"

import { Provider } from 'react-redux'


const AgendaApp = () => {
    return (
      <Provider store={store}>
          <div className="container text-center">
          <div className="row mt-3">
            <div className="col-md-6">
              <AgregarCitas />
            </div>
            <div className="col-md-6">
              <ListarCitas />
            </div>
          </div>
        </div>
      </Provider>
    )
}

export default AgendaApp;