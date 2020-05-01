import React, { useEffect } from 'react';
import "./App.scss";
import "./assets/normalize.css";

import Routes from './routes';

import { ApolloProvider } from '@apollo/react-hooks';
import client from 'config/graphql';

const App = () => {
    useEffect(() => {
        document.title = "Gestor de Projetos"
    },[])    
    return (
        <ApolloProvider client={client}>
            <Routes />
        </ApolloProvider>
    )
}

export default App;
