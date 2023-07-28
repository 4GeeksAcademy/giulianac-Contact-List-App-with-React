import React from 'react';
import { Link } from 'react-router-dom';

function AddContact() {
    return (
        <div className="container mt-3">
            <h1 className="text-center">Add a New Contact</h1>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="inputName">Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input type="number" className="form-control" id="inputPhone" placeholder="Enter Phone" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputAddress">Address</label>
                    <textarea className="form-control" id="inputAddress" rows="1" placeholder="Enter Address"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <Link to="/">
                <small>or get back to contacts</small>
            </Link>
        </div>
    )
}

export default AddContact;