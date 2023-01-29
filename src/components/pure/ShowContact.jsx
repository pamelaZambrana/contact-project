import React from 'react';
import "../../Styles/showContactStyle.css"
const ShowContact = ({data, closeWindow }) => {
    return (
        <div className="card full-contact">
            <i 
                className="bi bi-x-lg"
                onClick={()=>closeWindow()}
            ></i>
            <img className='contact-photo' alt='contact photograph'></img>
            <p><span>Full Name:</span> {`${data[0]} ${data[1]}`} </p>
            <p><span>Cellphone:</span> { data[2] } </p>
            <p><span>Email:</span> { data[3] } </p>
            <p><span>Status:</span>Conected</p>
            <button>
                <i className="bi bi-person-x-fill"></i>
            </button>
        </div>
    );
}

export default ShowContact;
