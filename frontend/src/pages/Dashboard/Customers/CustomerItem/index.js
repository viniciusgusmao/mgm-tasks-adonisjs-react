import React from 'react';
import "./index.scss";
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom'

const CsutomerItem = (props) => {
    const history = useHistory();
    return (
        <div className="container-customer-item" onClick={() => history.push(`/customers/${props.id}/edit`)}>
            <Image src={props.avatar+".jpg"} roundedCircle />
            <div>
                <span>{props.name}</span>
                <span>{props.cellphone}</span>
            </div>
        </div>
    );
}

export default CsutomerItem;
