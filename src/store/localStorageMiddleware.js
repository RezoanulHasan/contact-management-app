// localStorageMiddleware.js
export const localStorageMiddleware = store => next => action => {
    const result = next(action);
    const { contacts } = store.getState();
  
    // Save contacts to local storage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
    return result;
  };