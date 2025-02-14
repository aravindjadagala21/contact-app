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
    const styles = {color:"black",textDecoration: "none"}
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
        <form onSubmit={editformHandler}>
            <div className="ProfileCard">
                <div className="profileImg">
                    <img src={ganesh} alt="Profile" />
                </div>
                <div className="profileDetails">
                    <p className="name"> Name: 
                        <input 
                            type="text" 
                            className="input"
                            value={editContact.name}
                            name="name"
                            onChange={onChangeHandler} 
                        />
                    </p>
                    <p className="gmail">Gmail: 
                        <input 
                            type="text"
                            className="input" 
                            value={editContact.email}
                            name="email"
                            onChange={onChangeHandler} 
                        />
                    </p>
                </div>
                <div className='editFormBtn'>
                <button type="submit">Save</button>
                <Link to="/" style={styles}> <button>Back</button>  </Link>
                </div>
            </div>
        </form>
    );
}
