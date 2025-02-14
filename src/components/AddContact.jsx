
import './styles.css';
import { useState } from 'react';
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom'
export default function AddContact(props){
    const styles = {color:"black",textDecoration: "none"}
    const [contact,setContact] = useState({
        id:nanoid(),
        name:"",
        email:""
    })
    function onChangeHandler(e){
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
            id:nanoid(),
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
                <div className='editFormBtn'>
                <button >add</button>
                <Link to="/" style={styles}> <button>Back</button>  </Link>
                </div>
            </form>
        </div>
    )
}