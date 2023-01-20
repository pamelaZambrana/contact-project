import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>Name: { contact.name }</h2>
            <h2>Last Name: { contact.lastName }</h2>
            <h2>Email:{ contact.email }</h2>
            <h2>Conection:{ contact.conection ? "On line":"Not available"}</h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ContactComponent;
