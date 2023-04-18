import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

function _ContactList({ contacts }) {
  return (
    <section className='contact-list'>
      {contacts.map(contact =>
        <article key={contact._id} className='contact-preview'>
          <Link to={`/contact/${contact._id}`}>
            <section className='info'>
            <img src={`https://robohash.org/${contact._id}?set=set5`} alt={contact.name} />
              <div>
              <h2>{contact.name}</h2>
              <h4>{contact.phone}</h4>
              </div>
            </section>
          </Link>
        </article>
      )}
    </section>
  )
}

export const ContactList = memo(_ContactList)
