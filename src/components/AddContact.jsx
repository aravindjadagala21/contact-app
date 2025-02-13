
import './styles.css';
import { useState } from 'react';
import { nanoid } from "nanoid";

export default function AddContact(props){

    const [contact,setContact] = useState({
        id:nanoid(),
        name:"",
        email:""
    })
    function onChangeHandler(e){
        console.log(nanoid())
        const {name,value} = e.target;
        setContact((prev)=>({...prev,[name]:value}))
       
    }
    function submitHandler(e){
        e.preventDefault();
        if(contact.name=="" || contact.email==""){
            return alert("enter all fields")
        }
        props.addContactHandler(contact)
        setContact({
            name:"",
            email:""
        })
    }

    return (
        <div className="addContact">
            <form action="" onSubmit={submitHandler}>
                <h2>Add Contacts</h2>  
                <div className="name">
                    <label htmlFor="name" >Name:</label>
                    <input type="text" 
                    id="name" 
                    placeholder='Name' 
                    name='name' 
                    onChange={onChangeHandler}
                    value={contact.name}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    id="email" 
                    placeholder='Email' 
                    name='email' 
                    onChange={onChangeHandler}
                    value={contact.email}
                    />
                </div>
                <button className='form_btn'>add</button>
            </form>
        </div>
    )
}