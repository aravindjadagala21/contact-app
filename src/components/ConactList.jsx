import { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom'
import './styles.css'
export default  function ConactList(props){
    const {id,name,email} = props.contacts;
    console.log(id)
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div key={nanoid()} className="items">
                <div className="content">
                    <Link to="/profile" style={{color:"black",textDecoration: "none"}} state={{}}>
                    <div className="name">{contact.name}</div>
                    <div className='email'>{contact.email}</div>
                    </Link>
                </div>
                <div className="icon">
                <span>
                ✏️
                </span>
                <span className='dlt' 
                onClick={()=>props.removeContactHandler(contact.id)}
                style={{cursor:'pointer',marginLeft:"10px"}}
                >❌</span>
                </div>
            </div>
        )
    })
    return (
        <div className="contactlist">
            <div className="head">
            <h1>Contact list</h1>
            <button className='btn_addContact'>
                <Link to="/add" className='btn'> AddCotnact </Link>
            </button>
            </div>
            {renderContactList}
        </div>
    )
}