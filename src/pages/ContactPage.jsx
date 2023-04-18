import { Component, useEffect } from 'react'
import { contactService } from '../services/contact.service'
import ContactList from '../components/ContactList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadContacts, setFilterBy } from '../store/actions/contact.actions'

export function ContactPage(props) {

    const contacts = useSelector((storeState) => storeState.contactModule.contacts)
    const filterBy = useSelector((storeState)=> storeState.contactModule.filterBy)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts())
    },[])

    const onChangeFilter = (filterBy) => {//to add function component of filter
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }


        if (!contacts) return <div>loading</div>
        return (
            <section>

                <div>ContactPage <Link to={'/contact/edit'}>Add new contact</Link></div>
                <div>
                <ContactList contacts={contacts} onSelectContactId={this.onSelectContactId} />
                </div>
            </section>
        )
    }
