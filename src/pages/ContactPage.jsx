import { useEffect } from 'react'
import { ContactList } from '../components/ContactList'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadContacts, setFilterBy } from '../store/actions/contact.actions'

export function ContactPage(props) {

    const contacts = useSelector((storeState) => storeState.contactModule.contacts)
    const filterBy = useSelector((storeState) => storeState.contactModule.filterBy)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadContacts())
    }, [])

    const onChangeFilter = (filterBy) => {//to add function component of filter
        dispatch(setFilterBy(filterBy))
        dispatch(loadContacts())
    }


    if (!contacts) return <div>loading</div>
    return (
        <section className='contact-page-container'>

            <header className='contact-page-header'><h1>ContactPage</h1> <Link to={'/contact/edit'} className='add-new'>Add new contact</Link></header>
            <div>
                <ContactList contacts={contacts} />
            </div>
        </section>
    )
}
