import { contactService } from "../../services/contact.service";
import { REMOVE_CONTACT, SET_CONTACTS } from "../reducers/contact.reducer"

export function loadContacts() {
    return async (dispatch, getState) => {
        try {
            const contacts = await contactService.getContacts(getState().contactModule.filterBy)
            const action = {
                type: SET_CONTACTS,
                contacts
            }
            dispatch(action)
        }
        catch (err) {
            console.log('err', err)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await contactService.removeContact(contactId)
            const action = { type: REMOVE_CONTACT, contactId }
            dispatch(action)
            return 'removed'
        }
        catch (err) {
            console.log('err', err);
        }
    }
}