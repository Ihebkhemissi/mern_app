import React from "react";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { deleteContact, getcontacts } from "../../JS/actions/contact";
import { toggleEdit } from "../../JS/actions/edit";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    dispatch(toggleEdit());
    dispatch(getcontacts(id));
  };
  return (
    <div className="con">
      <h2 className="c">{contact.name}</h2>
      <h2 className="c">{contact.email}</h2>
      <h2 className="c">{contact.phone}</h2>
      <Link to="/edit">
        <button onClick={() => handleEdit(contact._id)}>edit</button>
      </Link>

      <button onClick={() => dispatch(deleteContact(contact._id))}>
        delete
      </button>
    </div>
  );
};

export default Contact;
