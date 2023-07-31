import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import Modal from '../component/Modal';

function AddContact() {
    const { store, actions } = useContext(Context);

    // set state to create newContact object
    const [newContact, setNewContact] = useState({
        name: "",
        homeAddress: "",
        phone: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.checkEmptyFields(newContact);
        // clears form fields after clicking save
        setNewContact({
            name: "",
            homeAddress: "",
            phone: "",
            email: ""
        });
    };

    return (
        <div className="container my-3">
            <form className="p-3" onSubmit={handleSubmit}>
                <h1 className="text-center mb-4">Add a New Contact</h1>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        placeholder="Full Name"
                        value={newContact.name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        placeholder="Enter Email"
                        value={newContact.email}
                        onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        placeholder="Enter Phone"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea
                        className="form-control"
                        id="inputAddress"
                        rows="1"
                        placeholder="Enter Address"
                        value={newContact.homeAddress}
                        onChange={(e) => setNewContact({ ...newContact, homeAddress: e.target.value })}
                    ></textarea>
                </div>
                <div className="row text-center">
                    <button type="submit" className="btn btn-success w-50 mx-auto mt-4">Save</button>
                    <Link to="/">
                        <small>or get back to contacts</small>
                    </Link>
                </div>
            </form>
            <Modal />
        </div>
    )
}

export default AddContact;