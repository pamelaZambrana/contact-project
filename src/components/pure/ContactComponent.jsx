import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';

const ContactComponent = ({contact, conection, openWindow}) => {

    

    return (
        <tr className='fw-normal'>
            <td className='align-middle'>
                <i 
                    className="bi bi-person-fill" 
                    style={{ color:"gray", fontSize:"16px" }}
                    onClick={ ()=>openWindow(contact)}
                >
                </i>
            </td>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.lastName}</span>
            </td>
            <td className='align-middle'>
                <i 
                    className='bi bi-circle-fill ' 
                    style={{ color:"gray", fontSize:"16px" }}
                >
                </i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ContactComponent;
