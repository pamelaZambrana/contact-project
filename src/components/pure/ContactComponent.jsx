import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contactClass';
import "../../Styles/ContactComponentStyles.css";

const ContactComponent = ({contact, openWindow}) => {

    function showConectionDisconection(){
        if (contact.conection){
            return(<i className='bi bi-circle-fill conection-circle-conected'></i> );
        }else{
            return(<i className='bi bi-circle-fill conection-circle-disconected'></i> )
        };
    }

    return (
        <tr className='fw-normal'>
            <td className='align-middle'>
                <i 
                    className="bi bi-person-fill contact-icon" 
                    onClick={ ()=>openWindow(contact)}
                >
                </i>
            </td>
            <th>
                <span 
                    className='ms-2 contact-name'
                    onClick={ ()=>openWindow(contact)}
                >
                    { contact.name }
                </span>
            </th>
            <td className='align-middle'>
                <span>{ contact.lastName}</span>
            </td>
            <td className='align-middle'>
                { showConectionDisconection() } 
                
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact:PropTypes.instanceOf(Contact)
};


export default ContactComponent;
