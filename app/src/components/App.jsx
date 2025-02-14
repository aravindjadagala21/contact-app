

import AddContact from './AddContact'
import Header from './Header'
import ContactList from './ConactList'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,
               Routes,
                Route,
               Link 
               } from "react-router-dom";

import ContactProfile from './ContactProfile';
// import { esbuildVersion } from 'vite';
import EditProfile from './EditProfile'
export default function App(){
  const LocalStorage_KEY= "contacts"
  const [contacts,setContacts] = useState([])

  function addContactHandler(contact){
    setContacts((prev)=>[...prev,contact])
  }
  
  function removeContactHandler(id){
    const newContacts = contacts.filter((contact)=>{
      return contact.id !==id;
    })
    setContacts(newContacts)
  }
   
  function editProfile(object){

    const updatedContactsList = contacts.map((obj)=>{
      console.log(obj)
      if(obj.id ==object.id){
        return {
          id:obj.id,
          name:object.name,
          email:object.email,
        }
      }
      return obj;
      
    })
    setContacts(updatedContactsList);
  }
  useEffect(()=>{
    const contacts_list = JSON.parse(localStorage.getItem(LocalStorage_KEY));
    if(contacts_list) setContacts(contacts_list)
  },[])
  useEffect(()=>{
    localStorage.setItem(LocalStorage_KEY,JSON.stringify(contacts))
  },[contacts])


  
  return (
    <Router>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path='/profile' element={<ContactProfile/>}  />
        <Route path="/edit" element ={<EditProfile  editProfile={editProfile}/>}/>
      </Routes>
    </div>
  </Router>
  )

}