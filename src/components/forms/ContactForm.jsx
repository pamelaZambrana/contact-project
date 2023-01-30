import React, { useRef } from 'react';
import { Contact } from '../../models/contactClass';
import "../../Styles/ContactFormStyles.css"

const ContactForm = ({addContact, closeForm}) => {
const nameRef=useRef("");
const lastNameRef=useRef("");
const cellphoneRef=useRef("");
const emailRef=useRef("");

    function addNewContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            cellphoneRef.current.value,
            emailRef.current.value,
            false,
        );
        addContact(newContact);
    };
    

    return (
        <div className='card contact-form'>
            <i 
                className="bi bi-x-lg form-close"
                onClick={()=>closeForm()}

            ></i>
            <form 
                onSubmit={ addNewContact }
                className='form'>
                <label>Name:</label>
                <input 
                    type="text"
                    ref={ nameRef }
                    placeholder="contact's name"
                    required
                >
                </input>
                <label>Last Name:</label>
                <input 
                    type="text"
                    ref={ lastNameRef }
                    placeholder='last name'
                >
                </input>
                <label>cellphone:</label>
                <input 
                    type="text"
                    ref={ cellphoneRef }
                    placeholder='cellphone'
                >
                </input>
                <label>Email:</label>
                <input 
                    type="text"
                    ref={ emailRef }
                    placeholder='email'
                >
                </input>
                <button 
                type='submit'
                onClick={ addNewContact }
                >
                    Save Contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
