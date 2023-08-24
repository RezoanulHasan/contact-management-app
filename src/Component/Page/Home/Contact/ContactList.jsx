import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../../../../store/contactsSlice';
import { confirmAlert } from 'react-confirm-alert';
import Swal from 'sweetalert2';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from 'react-router-dom';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
const dispatch = useDispatch();

const navigate = useNavigate();
const handleBack = () => {
  navigate(-1);
};

  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({});
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [editedStatus, setEditedStatus] = useState('');

  const handleEdit = (id, contact) => {
    setIsEditing(true);
    setEditedContact(contact);
    setEditedName(contact.name);
    setEditedEmail(contact.email);
    setEditedPhone(contact.phone);
    setEditedStatus(contact.status);
  };

  const handleSaveEdit = () => {
    const updatedContact = {
      ...editedContact,
      name: editedName,
      email: editedEmail,
      phone: editedPhone,
      status: editedStatus,
    };
    dispatch(editContact({ id: editedContact.id, updatedContact }));
    setIsEditing(false);

    // Display success message using SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Data updated successfully.',
    });
  };

  const handleDelete = id => {
    confirmAlert({
      title: 'Confirm Deletion',
      message: 'Are you sure you want to delete this data?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            dispatch(deleteContact(id));
            // Display success message using SweetAlert2
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Data deleted successfully.',
            });
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };


  return (
    <div className="mt-4    overflow-x-auto">

<h1 className='text-3xl  w-auto mb-20 text-center text-white bg-black p-5'>Contact List</h1>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <input
              type="text"
              placeholder="Name"
              value={editedName}
              onChange={e => setEditedName(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={editedEmail}
              onChange={e => setEditedEmail(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <input
              type="number"
              placeholder="Phone"
              value={editedPhone}
              onChange={e => setEditedPhone(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            />
            <select
              value={editedStatus}
              onChange={e => setEditedStatus(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <table className="w-full border-collapse  table-auto  ">
        <thead>
          <tr className="bg-gray-400 text-gray-700">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Phone</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id} className="text-center">
              <td className="py-2 px-4 border">{contact.name}</td>
              <td className="py-2 px-4 border">{contact.email}</td>
              <td className="py-2 px-4 border">{contact.phone}</td>
              <td className="py-2 px-4 border">{contact.status}</td>
              <td className="py-2 px-4 border">
                <button
                  onClick={() => handleEdit(contact.id, contact)}
                  className="btn btn-sm  btn-success mx-2 transition delay-150 duration-300 ease-in-ou  "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className=" btn btn-sm btn-error transition delay-150 duration-300 ease-in-ou "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="card-actions justify-center mt-10">
      <button  className="w-full btn  mt-3 btn-outline bg-black text-white py-2 rounded" onClick={handleBack}>Go Back</button>   
      </div>

    </div>
  );
};

export default ContactList;

