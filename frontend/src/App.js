import React, { useEffect } from 'react';
import "./App.scss";
import "./assets/normalize.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';


toast.configure({
    draggable: false,
    autoClose: 5000
});

const App = () => {
    useEffect(() => {
        document.title = "Gestor de Projetos"
    },[])    
    return (
        <Routes />
    )
}

export default App;
