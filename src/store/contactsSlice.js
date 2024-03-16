import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  editContacts,
  deleteContacts,
} from './operations';

const getContacts = type =>
  isAnyOf(
    fetchContacts[type],
    addContacts[type],
    editContacts[type],
    deleteContacts[type]
  );

const initialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editContacts.fulfilled, (state, action) => {
        const updateContact = action.payload;
        state.items = state.items.map(item =>
          item.id === updateContact.id ? updateContact : item
        );
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addMatcher(getContacts('pending'), state => {
        state.isLoading = true;
      })
      .addMatcher(getContacts('rejected'), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getContacts('fulfilled'), state => {
        state.isLoading = false;
        state.error = null;
      }),
});

export const contactsReducer = contactsSlice.reducer;
