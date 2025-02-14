

import AddContact from './AddContact'
import Header from './Header'
import ContactList from './ConactList'
import { nanoid } from "nanoid";
import { useEffect, useState } from 'react'
import { BrowserRouter as Router,
               Routes,
                Route,
               Link 
               } from "react-router-dom";

import ContactProfile from './ContactProfile';
import constactsapi from '../api/contacts'
// import { esbuildVersion } from 'vite';
import EditProfile from './EditProfile'
export default function App(){
  const LocalStorage_KEY= "contacts"
  const [contacts,setContacts] = useState([])

  async function addContactHandler(contact){
    const request = {
      id:nanoid(),
      ...contact
    }
    const res = await constactsapi.post("/contacts",contact)
    setContacts((prev)=>[...prev,res.data])
  }
  
  async function removeContactHandler(id){
    const res = await constactsapi.delete(`/contacts/${id}`)
    const newContacts = contacts.filter((contact)=>{
      return contact.id !==res.data.id;
    })
    setContacts(newContacts)
  }
   
   async function editProfile(object){
    const res = (await constactsapi.patch(`/contacts/${object.id}`,object)).data
    const updatedContactsList = contacts.map((obj)=>{
      if(obj.id ==object.id){
        return {
          id:obj.id,
          name:res.name,
          email:res.email,
        }
      }
      return obj;
      
    })
    setContacts(updatedContactsList);
  }
  function getContacts(){
    constactsapi.get("/contacts")
    .then(res=>{
      if(res.data) setContacts(res.data)
        else console.log("404 not found")
    })
  }

  useEffect(()=>{
    getContacts()
  },[])
  // useEffect(()=>{
   
  // },[contacts])


  
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