import React from 'react';
import "./index.scss";

const Logo = () => (
    <div className="container-logo">
        <img src={require('../../assets/images/logo.png')} alt="logo" />
        <div>
            <span>Tecnovix</span>
            <span>Soluções Inteligentes</span>
        </div>
    </div>
);


export default Logo;
