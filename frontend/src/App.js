import React, { useEffect } from 'react';
import "./App.scss";
import "./assets/normalize.css";

import Routes from './routes';

const App = () => {
    useEffect(() => {
        document.title = "Gestor de Projetos"
    },[])    
    return (
        <Routes />
    )
}

export default App;
