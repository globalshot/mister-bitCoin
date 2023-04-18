import React, { useEffect, useState } from 'react'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export function ContactDetails(props) {

  const [contact, setContact] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
  // const user = { name: 'tester', coins: 100 }//still hard coded


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


  function onEdit() {
    navigate('/contact/edit/' + params.id)
  }


  if (!contact) return <div>loading contact</div>
  return (
    // <div>{contact}</div>
    <>

      <div className='contact-info'>
        <img src={`https://robohash.org/${contact._id}?set=set5`} alt={contact.name} />
        <div className='info-card'>
          <div className='user-info '>name: {contact.name}</div>
          <div className='user-info '>email: {contact.email}</div>
          <div className='user-info '>phone: {contact.phone}</div>
          <div className='edit'>
            <button onClick={onEdit}>
              <span>Edit user info</span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
