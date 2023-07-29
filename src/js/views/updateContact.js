import React, { useContext, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

function UpdateContact() {
    const { id } = useParams();
    //to redirect after submitting
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [updatedContact, setUpdatedContact] = useState({
        name: store.contacts[id - 1].name,
        homeAddress: store.contacts[id - 1].homeAddress,
        phone: store.contacts[id - 1].phone,
        email: store.contacts[id - 1].email
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.editContact(parseInt(id), updatedContact);
        // redirects back to the contact list view
        navigate("/");
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center">Edit a Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Full Name"
                        value={updatedContact.name}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, name: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter Email"
                        value={updatedContact.email}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, email: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Phone"
                        value={updatedContact.phone}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, phone: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                        className="form-control"
                        id="inputAddress"
                        rows="1"
                        placeholder="Enter Address"
                        value={updatedContact.homeAddress}
                        onChange={(e) => setUpdatedContact({ ...updatedContact, homeAddress: e.target.value })}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <Link to="/">
                <small>or get back to contacts</small>
            </Link>
        </div>
    )
}

export default UpdateContact;