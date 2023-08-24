import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { localStorageMiddleware } from './localStorageMiddleware'; // Import the middleware


// Load data from local storage
const loadFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem('contacts');
    if (serializedData === null) return undefined;
    return JSON.parse(serializedData);
  } catch (err) {
    console.error('Error loading data from local storage:', err);
    return undefined;
  }
};
const initialData = loadFromLocalStorage();


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

  preloadedState: {
    contacts: initialData || [], // Load the data or use an empty array  in localstorage
  },

  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(localStorageMiddleware), // Add  middleware for localstorage

});

export default store;
