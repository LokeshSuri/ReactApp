import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import ContactList from './ContactList';

function ContactApp() {
    let [contact, setContact] = useState ({
        contacts:[],
        errorMsg:"",
    });
    useEffect(() => {
        axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
        .then((response) => {
            setContact({...contact,contacts:response.data})
            console.log(response.data);
        })
        .catch(() => {
            
        })
    }, []);
  return (
    <>
        <div className='container mt-6'>
            <div className='row'>
                <div className='col-md-8'>
                    {contact.contacts.length>0 ? (
                        <>
                            <ContactList contacts={contact.contacts}/>
                        </>
                    ):null}
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactApp