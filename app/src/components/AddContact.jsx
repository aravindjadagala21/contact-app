
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
        <div className="flex justify-center h-screen bg-gray-200 items-center">
            <form action="" onSubmit={submitHandler}
            className='flex flex-col gap-15 border py-6 px-15'
            >
                <h2 className='text-3xl font-bold '>Add Contacts</h2>  
                <div className=" ">
                    <label htmlFor="name " 
                    className='block mb-2 text-xl font-medium'
                    >Name:</label>
                    <input type="text" 
                    className='border-b font-normal outline-0'
                    id="name" 
                    placeholder='Name' 
                    name='name' 
                    onChange={onChangeHandler}
                    value={contact.name}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email"
                      className='block mb-2 text-xl font-medium'
                    >Email:</label>
                    <input type="email" 
                     className='border-b font-bold outline-0'
                    id="email" 
                    placeholder='Email' 
                    name='email' 
                    onChange={onChangeHandler}
                    value={contact.email}
                    />
                </div>
                <div className='flex justify-evenly'>
                <button 
                className='bg-blue-200 rounded py-2 px-4'
                >add</button>
                <Link to="/" style={styles}> <button
                className='bg-blue-200 rounded py-2 px-4' 
                >Back</button>  </Link>
                </div>
            </form>
        </div>
    )
}