import React, { useState } from 'react';
import { Contact } from '../../models/contactClass';
import "../../Styles/ContactListStyles.css";
import ContactForm from '../forms/ContactForm';
import ContactComponent from '../pure/ContactComponent';
import ShowContact from '../pure/ShowContact';


const ContactList = () => {

    const defaultContact1=new Contact("Pamela","Zambrana",15234521,"example@email1.com",true);
    const defaultContact2=new Contact("Ronald","Blanco",123654225,"example@email2.com",false);
    const defaultContact3=new Contact("Ana","Foronda",15258521,"example@email3.com",true);
    const defaultContact4=new Contact("Eli","Peñaloza",87234521,"example@email4.com",true);

    const [contacts, setContacts] = useState([defaultContact1,defaultContact2,defaultContact3,defaultContact4]);
    const [windowContact, setWindowContact] = useState({});
    const [openForm, setOpenForm] = useState(false);
    const [open, setOpen] = useState(false);
    
    //open and close contanct details window
    function openWindow(contact){
        console.log("open window");
        if((!open) && (!openForm)){
            setOpen(prevState=>!prevState);
        }else if((!open) && (openForm)){
            console.log("se cierra el formulario")
            setOpenForm(prevState=>!prevState);
            setOpen(prevState=>!prevState);
        };         
        setWindowContact(contact);
        console.log(contact);
        console.log(windowContact);
    };
    function closeWindow(){
        setOpen(prevState=>!prevState);
    };
//open and close form
    function openFormWindow(){
        console.log("open form window");
        if((!openForm) && (!open)){
            setOpenForm(prevState=>!prevState);
        }else if((!openForm) && (open)){
            console.log("se cierra la ventana de contacto")
            setOpen(prevState=>!prevState);
            setOpenForm(prevState=>!prevState);
        };
    };
    function closeForm(){
        setOpenForm(prevState=>!prevState);
    };
//add a new contact
    function addContact(contact){
        const tempContact=[...contacts];
        tempContact.push(contact);
        setContacts(tempContact);
    }
//remove contact
    function removeContact(){
        setOpen(prevState=>!prevState);
        const index=contacts.findIndex(item=> item===windowContact);
        const tempContact=[...contacts];
        tempContact.splice(index,1);
        setContacts(tempContact);
    }
//change the estatus
    function switchFunction(){
        console.log("status changed");
        const index=contacts.findIndex(item=>item===windowContact);
        const tempContact=[...contacts];
        tempContact[index].conection=!tempContact[index].conection;
        setContacts(tempContact);
    };
    return (
        <div className='contact-list'>
             <div className='col-12'>
                <div className='card'>
                    <div className='card-header'>
                        <h3 className='contact-list-title'>Your contacts:</h3>
                    </div>
                    <div className='card-body' style={ {position:"relative", height:"400px"}} data-mdb-perfect-scrollbar="true">
                        <table>
                            <thead className='table-head'>
                                <tr>
                                    <th scope='col'></th>
                                    <th scope='col'>Name</th>     
                                    <th scope='col'>Last Name</th>       
                                    <th scope='col'></th>        
                                </tr>
                            </thead>
                            <tbody>
                                { contacts.map((con, index)=> {
                                        return (
                                            <ContactComponent
                                                key= {index}
                                                contact={ con }
                                                openWindow ={ openWindow }
                                            >
                                            </ContactComponent>
                                        )
                                    }
                                )}                             
                            </tbody>
                            
                        </table>
                    </div>
                    <button 
                        className="btn btn-primary"
                        onClick={ openFormWindow }
                    >
                            <i className="bi bi-person-fill-add"></i>       
                    </button>
                </div>
                {/* <TaskForm add={ addTask }></TaskForm> */}
            </div>
            { open && 
                (<ShowContact
                    data={ windowContact }
                    closeWindow = { closeWindow }
                    remove = { removeContact }
                    switchFunction = { switchFunction }
                >
                </ShowContact>)
            }
            { openForm && 
                (<ContactForm
                    addContact = { addContact }
                    closeForm ={ closeForm }
                >
                </ContactForm>)
            }
            
            <div >
            </div>
            
        </div>
    );
}

export default ContactList;
