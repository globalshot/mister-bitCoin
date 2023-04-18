import React, { Component, useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export function ContactDetails(props) {

  const [contact, setContact] = useState(null)
  const params = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    loadContact()
  }, [params.id])


  async function loadContact() {
    try {
      const contact = await contactService.getContactById(params.id)
      setContact(contact)
      // console.log(contact);
    }
    catch (err) {
      console.log('err', err);
      return ''
    }
  }


  onEdit = () => {
    navigate('/contact/edit/' + params.id)
  }


  if (!contact) return <div>loading contact</div>
  return (
    // <div>{contact}</div>
    <div>
      <div>
        <div>name: {contact.name}</div>
        <div>email: {contact.email}</div>
        <div>phone: {contact.phone}</div>
      </div>
      <div className='edit'>
        <button onClick={onEdit}>
          <span>Edit</span>
        </button>
      </div>
    </div>
  )
}
