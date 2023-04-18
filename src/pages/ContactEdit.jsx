import React, { Component, useEffect } from 'react'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams } from 'react-router-dom'

export function ContactEdit(props) {

    const [contact, handleChange, setContact] = useForm(contactService.getEmptyContact())

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact
    }, [])
    async function loadContact() {
        const contactId = params.id
        if (contactId) {
            try {
                const contact = await contactService.getContactById(contactId)
                setContact(contact)
            } catch (error) {
                console.log('error:', error)
            }
        }
    }

    async function onSaveContact(ev) {
        ev.preventDefault()
        try {
            await contactService.saveContact({ ...contact })
            navigate('/')
        } catch (error) {
            console.log('error:', error)
        }
    }

    // hand change not anymore here
    handleChange = ({ target }) => {
        let field = target.name
        if (field === 'contactName') field = 'name'
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;
            case 'checkbox':
                value = target.checked
                break;
        }
        setContact(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }
    async function deleteContact() {
        try {
            await contactService.deleteContact(contact._id)
            navigate('/contact')
        }
        catch (err) {
            console.log('err', err);
        }
    }
    const { name, email, phone } = contact
    const contactName = name
    return (
        <section className="edit-contact">
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            {contact._id && <button onClick={deleteContact}>Delete contact</button>}
            <form onSubmit={onSaveContact}>
                <label htmlFor="contactName">Name</label>
                <input type="text" onChange={handleChange} value={contactName} name='contactName' id='contactName' />

                <label htmlFor="email">Email</label>
                <input type="text" onChange={handleChange} value={email} name='email' id='email' />

                <label htmlFor="phone">Phone</label>
                <input type='text' onChange={handleChange} value={phone} name='phone' id='phone' />
                <button>Save</button>
            </form>
        </section>
    )
}
