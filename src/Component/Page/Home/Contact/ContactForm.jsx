import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../../store/contactsSlice';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('Active');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !email || !phone) {
      if (!name) setNameError('Name is required');
      if (!email) setEmailError('Email is required');
      if (!phone) setPhoneError('Phone is required');
      return;
    }

    const newContact = {
      id: new Date().getTime(),
      name,
      email,
      phone,
      status,
    };
    
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
    setStatus('Active');

    // Clear error messages
    setNameError('');
    setEmailError('');
    setPhoneError('');

    // Display success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your data added successfully.',
    });
  };


  return (

    <>
     <Fade direction="down" > 
    <form className="max-w-sm mx-auto p-6 bg-black shadow-md rounded-lg">
     
     <h1 className='mb-5 text-center  text-xl font-bold text-white'>Add  contact info here</h1>
     
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
      />
      {nameError && <p className="text-red-500 mb-2">{nameError}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
      />
      {emailError && <p className="text-red-500 mb-2">{emailError}</p>}

      <input
        type="number"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
      />
      {phoneError && <p className="text-red-500 mb-2">{phoneError}</p>}

      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      
      <button
        type="submit"
        className="w-full btn  btn-outline bg-black text-white py-2 rounded"
        onClick={handleSubmit}
      >
        Add Contact
      </button>

<Link   to="/Contact detail's">
      <button
        type="submit"
        className="w-full btn  mt-3 btn-outline bg-black text-white py-2 rounded"      
      >
    view contact detail's
      </button>

      </Link>
     
    </form>
    </Fade>

    </>
  );
};

export default ContactForm;

