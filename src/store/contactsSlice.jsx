import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [], // Don't define initialData here
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedContact } = action.payload;
      const index = state.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedContact };
      }
    },
    deleteContact: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(contact => contact.id !== idToDelete);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

