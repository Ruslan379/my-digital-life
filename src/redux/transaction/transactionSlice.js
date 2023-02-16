import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import {
    fetchContacts,
    addTransactionExpenses,
    deleteContact,
    editContact,
    fetchContactsFromMmockapiIo,
    deleteContactFromMmockapiIo
    // AddUploadContacts
} from './transactionOperations';




const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.isDeleting = false;
    state.error = payload;
};


const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transaction: {
            transactionsType: "",
            date: "",
            dateFilter: "",
            description: "",
            category: "",
            sum: null,
        },
        isLoading: false,
        isDeleting: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addTransactionExpenses.pending]: handlePending, //!!!
        [deleteContact.pending]: handlePending,
        [editContact.pending]: handlePending,
        [fetchContactsFromMmockapiIo.pending]: handlePending,
        [deleteContactFromMmockapiIo.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addTransactionExpenses.rejected]: handleRejected, //!!!
        [deleteContact.rejected]: handleRejected,
        [editContact.rejected]: handleRejected,
        [fetchContactsFromMmockapiIo.rejected]: handleRejected,
        [deleteContactFromMmockapiIo.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        //!!!
        [addTransactionExpenses.fulfilled](state, { payload }) {
            console.log("addTransactionExpenses.fulfilled --> payload:", payload); //!
            // state.transaction = payload; //! Пишет весь объект transaction
            state.transaction.transactionsType = payload.transactionsType
            state.transaction.date = payload.date
            state.transaction.dateFilter = payload.dateFilter
            state.transaction.description = payload.description
            state.transaction.category = payload.category
            state.transaction.sum = payload.sum
            state.isLoading = false;
            state.error = null;
        },

        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            //! вариант Репеты:
            // const index = state.items.findIndex(task => task.id === payload);
            // state.items.splice(index, 1);
            //! МОЙ вариант:
            // const newContact = state.items.filter(contact => contact.id !== payload);
            // console.log("deleteContact==>payload:", payload); //!
            // state.items = state.items.filter(contact => contact.id !== payload); //??
            state.items = state.items.filter(contact => contact._id !== payload);
            // console.log("deleteContact==>state.items:", state.items); //!
            // state = { items: newContact }
        },

        [editContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            // console.log("editContact==>payload:", payload); //!
            // console.log("state.items:", state.items); //!
            // const index = state.items.findIndex(task => task.id === payload.id); //??
            const index = state.items.findIndex(task => task._id === payload._id);
            // console.log("index:", index); //!
            // console.log("state.items[index]:", state.items[index]); //!
            state.items.splice(index, 1, payload);
        },

        [fetchContactsFromMmockapiIo.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            // state.uploadContacts = payload;
            const newUploadContacts = payload.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    number: item.phone
                };
            });
            // console.log("fetchContactsFromMmockapiIo ==> newUploadContacts:", newUploadContacts); //!
            state.uploadContacts = newUploadContacts;
        },

        [deleteContactFromMmockapiIo.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            //! МОЙ вариант:
            // const newContact = state.uploadContacts.filter(contact => contact.id !== payload);
            // console.log("deleteContact==>payload:", payload); //!
            state.uploadContacts = state.uploadContacts.filter(contact => contact.id !== payload);
            // state = { uploadContacts: newContact }
        },

        // [AddUploadContacts.fulfilled](state, { payload }) {
        //     state.isLoading = false;
        //     state.error = null;
        //     const newUploadContacts = payload.map(item => {
        //         return {
        //             id: item.id,
        //             name: item.name,
        //             number: item.phone
        //         };
        //     });
        //     state.items = [...state.items, ...newUploadContacts]
        // },

        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const transactionsReducer = transactionsSlice.reducer;
