import React from 'react'
import './modal.css'
const Modal = ({ selected, show, hide }) => {

    console.log(selected.name);
    return (

        <div className={"modal " + show}>
            <div className="title">
                <h2>{selected.name}</h2>
                <p onClick={hide}>x</p>
            </div>
            <div className="content">
                <img src={selected.img} alt="selected.name" />
                <p>{selected.notes}</p>
                <p className="link">try it on <a href={selected.link} target="_blank" rel="noopener noreferrer">CodePen</a></p>
            </div>
            
        </div>

    )
}

export default Modal