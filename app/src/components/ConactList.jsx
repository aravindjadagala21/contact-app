import { useState } from 'react'
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom'

export default function ContactList(props) {
    const renderContactList = props.contacts.map((contact) => {
        const { id, name, email } = contact;
        const firstLetter = name.charAt(0).toUpperCase();
        
        return (
            <div key={nanoid()} className="flex m-3 items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center space-x-4 m-4">
                    
                    <div 
                    className="flex items-center justify-center w-12 h-12 rounded-full 
                    bg-blue-500 text-white text-xl font-bold  my-4
                    ">
                        {firstLetter}
                    </div>
                    
                    <div className="content">
                        <Link 
                            to="/profile" 
                            className="text-black no-underline hover:text-blue-600"
                            state={{ id, name, email }}
                        >
                            <div className="name text-lg font-semibold">{name}</div>
                            <div className='email text-gray-600'>{email}</div>
                        </Link>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <Link
                        to="/edit"
                        className="text-black no-underline hover:text-blue-600 flex items-center"
                        state={{ id, name, email }}
                    >
                        <span>Edit ✏️</span>
                    </Link>
                
                    <span 
                        className='text-red-500 hover:text-red-700 cursor-pointer'
                        onClick={() => props.removeContactHandler(contact.id)}
                    >
                        ❌
                    </span>
                </div>
            </div>
        )
    })
    
    return (
        <div className="container mx-auto p-4 max-w-3xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Contact List</h1>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-200'>
                    <Link to="/add" className='text-white no-underline'> 
                        Add Contact 
                    </Link>
                </button>
            </div>
            
            {props.contacts.length > 0 ? (
                renderContactList
            ) : (
                <div className="text-center py-8 text-gray-500">
                    No contacts found. Add your first contact!
                </div>
            )}
        </div>
    )
}