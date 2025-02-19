import { createSlice } from '@reduxjs/toolkit';
import {
    fetchContacts,
    createContact,
    updateContactStatus,
    deleteContact,
} from '../actions/contactActions';

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Helper function for pending states
const handlePending = (state) => {
    state.isContactLoading = true;
    state.contactError = null;
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
// Helper function for rejected states
const handleRejected = (state, action) => {
    state.isContactLoading = false;
    state.contactError = action.payload || 'An error occurred';
};

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
const initialState = {
    isContactLoading: false,
    contacts: {
        data: [],
        pagination: {
            totalContacts: 0,
            currentPage: 1,
            totalPages: 1,
            limit: 10,
        },
    },
    allContacts: [],
    contactMassages: null,
    contactError: null,
    isContactStatusLoading: false,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        clearErrors: (state) => {
            state.contactError = null;
        },
        resetState: (state) => {
            state.isContactLoading = false;
            state.contacts = { data: [], pagination: { totalContacts: 0, currentPage: 1, totalPages: 1, limit: 10 } };
            state.allContacts = [];
            state.contactMassages = null;
            state.contactError = null;
        },
        updatePagination: (state, action) => {
            const { currentPage, totalPages, totalContacts, limit } = action.payload;
            state.contacts.pagination = { currentPage, totalPages, totalContacts, limit };
        },
    },
    extraReducers: (builder) => {
        // Fetch Contacts
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                const { contacts, pagination } = action.payload.data;
                state.isContactLoading = false;
                state.contacts = contacts || [];
                state.contacts.pagination = pagination || {};
                state.allContacts = action.payload.data.contacts || [];
                state.contactError = null;
            })
            .addCase(fetchContacts.rejected, handleRejected)

        // Create Contact
        builder
            .addCase(createContact.pending, handlePending)
            .addCase(createContact.fulfilled, (state, action) => {
                const newContact = action.payload.contact || {};
                state.isContactLoading = false;
                state.contacts.data = [newContact, ...state.contacts.data] || [];
                state.allContacts = [...state.allContacts, newContact] || [];
                state.contactError = null;
            })
            .addCase(createContact.rejected, handleRejected)

        // Update Contact Status
        builder
            .addCase(updateContactStatus.pending, handlePending)
            .addCase(updateContactStatus.fulfilled, (state, action) => {
                const updatedContact = action.payload.contact || [];
                state.isContactUpdating = false;
                state.contactError = null;
            })
            .addCase(updateContactStatus.rejected, handleRejected)

        // Delete Contact
        builder
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                const deletedId = action.meta.arg || null;
                state.isContactDeleting = false;
                state.contactError = null;
            })
            .addCase(deleteContact.rejected, handleRejected);
    },
});

{/* //dev by sanket Arjun pujari - sanketpujari33@gmiail.com - 7378768735 */ }
export const { clearErrors, resetState, updatePagination } = contactSlice.actions;
export default contactSlice.reducer;
