import React, { useState } from 'react';
import { Contact } from '../../models/contactClass';
import ContactComponent from '../pure/ContactComponent';
import ShowContact from '../pure/ShowContact';


const ContactList = () => {

    const defaultContact1=new Contact("Pamela","Zambrana",15234521,"example@email1.com",true);
    const defaultContact2=new Contact("Ronald","Blanco",123654225,"example@email2.com",false);
    const defaultContact3=new Contact("Ana","Foronda",15258521,"example@email3.com",true);
    const defaultContact4=new Contact("Eli","Peñaloza",87234521,"example@email4.com",true);

    const [contacts, setContacts] = useState([defaultContact1,defaultContact2,defaultContact3,defaultContact4]);
    const [windowContact, setWindowContact] = useState([]);
    const [open, setOpen] = useState(false);
    function openWindow(contact){
        console.log("open window");
        if(!open){
            setOpen(prevState=>!prevState);
        };        
        const fullContactName=[contact.name,contact.lastName,contact.cellphone,contact.email,contact.conection];
        setWindowContact(fullContactName);
        console.log(fullContactName);
    };

    function closeWindow(){
        setOpen(prevState=>!prevState);
    };
    return (
        <div className='contact-list'>
             <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h1>Your contacts:</h1>
                    </div>
                    <div className='card-body' style={ {position:"relative", height:"400px"}} data-mdb-perfect-scrollbar="true">
                        <table>
                            <thead>
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
                        <button>
                            <i className="bi bi-person-fill-add"></i>       
                        </button>
                    </div>
                </div>
                {/* <TaskForm add={ addTask }></TaskForm> */}
            </div>
            { open && 
                (<ShowContact
                    data={ windowContact }
                    closeWindow = { closeWindow }
                >
                </ShowContact>)
            }
        </div>
    );
}

export default ContactList;
