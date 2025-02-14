import { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom'
import './styles.css'
export default  function ConactList(props){
    const renderContactList = props.contacts.map((contact)=>{
        const {id,name,email} = contact;
        const styles = {color:"black",textDecoration: "none"}
        return (
            <div key={nanoid()} className="items">
                <div className="content">
                    <Link to="/profile" style={styles} 
                    state={{id:id,name:name,email:email}}
                    >
                    <div className="name">{name}</div>
                    <div className='email'>{email}</div>
                    </Link>
                </div>
                <div className="icon">
                    <Link
                    to="/edit"
                    style={styles} 
                    state={{id:id,name:name,email:email}}
                    >
                        <span >Edit ✏️</span>
                    </Link>
                
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