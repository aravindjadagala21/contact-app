

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
      </Routes>
    </div>
  </Router>
  )

}