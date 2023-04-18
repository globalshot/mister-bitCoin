import React, { useEffect } from 'react'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../customHooks/useForm'

export function ContactEdit(props) {

    const [contact, handleChange, setContact] = useForm(contactService.getEmptyContact())

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadContact()
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
            navigate('/contact')
        } catch (error) {
            console.log('error:', error)
        }
    }

    // hand change not anymore here
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
    // const contactName = name
    return (
        <section className="edit-contact">
            <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
            {contact._id && <button onClick={deleteContact}>Delete contact</button>}
            <form onSubmit={onSaveContact}>
                <label htmlFor="name">Name:</label>
                <input type="text" onChange={handleChange} value={name} name='name' id='name' placeholder='For example: Jhon Test' />

                <label htmlFor="email">Email:</label>
                <input type="text" onChange={handleChange} value={email} name='email' id='email' placeholder='For example: example@test.com'/>

                <label htmlFor="phone">Phone:</label>
                <input type='text' onChange={handleChange} value={phone} name='phone' id='phone' placeholder='For example: +1 (111) 123-1234'/>
                <button>Save</button>
            </form>
        </section>
    )
}
