import { Component, useEffect } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../components/ContactList'
import { useDispatch, useSelector } from 'react-redux'

export function ContactPage(props) {

    const contacts = useSelector((storeState) => storeState.contactModule.contacts)

    const dispatch = useDispatch()

    useEffect(() {
        dispatch(loadContacts())
    },[])

   onAdd = () => {
        this.props.history.push('/contact/edit/')
   }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>loading</div>
        return (
            <section>

                <div>ContactPage <button onClick={this.onAdd}>Add new contact</button></div>
                <div>
                <ContactList contacts={contacts} onSelectContactId={this.onSelectContactId} />
                </div>
            </section>
        )
    }
}
