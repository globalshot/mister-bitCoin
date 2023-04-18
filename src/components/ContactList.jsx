import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactList({ contacts, onSelectContactId }) {
  return (
    <section className='contact-list'>
      {contacts.map(contact =>
        <article key={contact._id} className='contact-preview'>
          <Link to={`/contact/${contact._id}`}>
            <section className='info'>
              <h2>name: {contact.name}</h2>
              <h4>phone: {contact.phone}</h4>
            </section>
          </Link>
        </article>
      )}
    </section>
  )
}
