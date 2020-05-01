import React from 'react';
import { GoProject } from 'react-icons/go'
import "./index.scss";

const Logo = () => (
    <div className="container-logo">
        <GoProject size={40} />
        <div>
            <span>Gestor</span>
            <span>de projetos</span>
        </div>
    </div>
);


export default Logo;
