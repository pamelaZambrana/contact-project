import React from 'react';
import "../../Styles/showContactStyle.css"
const ShowContact = ({data, closeWindow, remove, switchFunction }) => {

    function conectedDisconected(){
        if (!data.conection){
            return(
            <i 
                className="bi bi-toggle2-off" 
                style={{color:"gray"}}
                onClick={ ()=>switchFunction() }
            ></i>);
        }else{
            return(
            <i 
                className="bi bi-toggle2-on" 
                style={{color:"green"}}
                onClick={ ()=>switchFunction() }
            ></i>);
        };
    };
    return (
        <div className="card full-contact">
            <i 
                className="bi bi-x-lg full-contact-close"
                onClick={()=>closeWindow()}
            ></i>
            <img className='contact-photo' alt='contact photograph'></img>
            <section className='contact-detail'>
                <p><span>Full Name:</span> {`${data.name} ${data.lastName}`} </p>
                <p><span>Cellphone:</span> { data.cellphone} </p>
                <p><span>Email:</span> { data.email } </p>
                <div className='conection-div'>
                    <span>Status:</span>
                    { data.conection ? " Conected" : " Disconected"}
                    { conectedDisconected() }
                </div>
            </section>
            
            <button 
                type='button'
                className="btn btn-primary remove-button"
                onClick={()=> remove()}
            >
                <i className="bi bi-person-x-fill"></i>
            </button>
        </div>
    );
}

export default ShowContact;
