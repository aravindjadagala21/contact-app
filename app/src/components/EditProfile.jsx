import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ganesh from '../images/ganapathi.jpg';

export default function EditProfile(props) {
    const location = useLocation(); 
    const [editContact, setEditContact] = useState({
        id: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        if (location.state) {
            const { id, name, email } = location.state;
            setEditContact({ id, name, email });
        }
    }, [location.state]); 

    function onChangeHandler(event) {
        const { name, value } = event.target;
        setEditContact((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function editformHandler(e){
        e.preventDefault();
        props.editProfile(editContact);
    }

    return (
        <form onSubmit={editformHandler} className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center mb-6">
                <img src={ganesh} alt="Profile" className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" />
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={editContact.name}
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Gmail:</label>
                <input 
                    type="email"
                    name="email"
                    value={editContact.email}
                    onChange={onChangeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-between mt-6">
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Save
                </button>
                
                <Link to="/">
                    <button 
                        type="button" 
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
                    >
                        Back
                    </button>
                </Link>
            </div>
        </form>
    );
}
