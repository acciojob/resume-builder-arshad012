import React from "react";
// import './../styles/App.css';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';

import AllRoutes from "../AllRoutes/AllRoutes";
import Navbar from "./Navbar";
import { store } from "../redux/store";


const App = () => {
  return (
    <div>
      <Navbar />
      <Provider store={store}>
          <HashRouter>
            <AllRoutes/>
          </HashRouter>
      </Provider>
    </div>
  )
}

export default App;