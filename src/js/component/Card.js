import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams } from "react-router-dom";

function Card() {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    console.log(typeof {id} );
    return (
        <div>
            {store.contacts.map((contact) => 
                <div className="card mb-3 mx-5" key={contact.id} >
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={rigoImage} className="img-fluid" alt="Contact Profile Picture" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <div className="profile-details d-flex">
                                    <i className="fa fa-map-marker-alt" />
                                    <p className="card-text text-muted">{contact.homeAddress}</p>
                                </div>
                                <div className="profile-details d-flex">
                                    <i className="fas fa-phone" />
                                    <p className="card-text">
                                        <small className="text-muted">{contact.phone}</small>
                                    </p>
                                </div>
                                <div className="profile-details d-flex">
                                    <i className="fas fa-at" />
                                    <p className="card-text">
                                        <small className="text-muted">{contact.email}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <Link to={`/edit/${contact.id}`}>
                            <button className="card-button" >
                                <i className="fas fa-pencil-alt" />
                            </button>
                            </Link>
                            <button className="card-button" onClick={() => actions.deleteContact(contact)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Card;