import React from "react";
import './../styles/App.css';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AllRoutes from "../AllRoutes/AllRoutes";
import Navbar from "./Navbar";
import { store } from "../redux/store";


const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <AllRoutes/>
        </BrowserRouter>
    </Provider>
  )
}

export default App;