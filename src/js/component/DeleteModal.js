import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const DeleteModal = () => {
  const { store, actions } = useContext(Context);

  if (!store.showModal) return null;

  const handleDelete = () => {
    actions.deleteContact(store.contactToBeDeleted);
    actions.closeModal();
  };

  const handleClose = () => {
    actions.closeModal();
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm Deletion</h5>
            <button type="button" className="btn btn-close" data-dismiss="modal" onClick={handleClose}>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this contact?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;