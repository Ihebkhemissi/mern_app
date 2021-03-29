import React, { useState, useEffect } from "react";
import { editContact, postContact } from "../JS/actions/contact";
import { useSelector, useDispatch } from "react-redux";
const Add = ({ history }) => {
  const edit = useSelector((state) => state.EditReducer.edit);
  const editcontact = useSelector((state) => state.contactReducer.contact);
  const [contact, setContact] = useState({});
  const dispatch = useDispatch();
  console.log(editContact);
  useEffect(() => {
    edit
      ? setContact(editcontact)
      : setContact({ name: "", email: "", phone: "" });
  }, [editcontact, edit]);

  const handlechange = (e) => {
    e.preventDefault();
    edit
      ? dispatch(editContact(editcontact._id, contact))
      : dispatch(postContact(contact));
  };
  const handlecontact = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>Name</label>
      <input value={contact.name} onChange={handlecontact} name="name" />
      <label>email</label>
      <input value={contact.email} onChange={handlecontact} name="email" />
      <label>phone</label>
      <input value={contact.phone} onChange={handlecontact} name="phone" />
      <button
        onClick={(e) => {
          handlechange(e);
          history.push("/");
        }}
      >
        {edit ? "edit" : "add"}
      </button>
    </div>
  );
};

export default Add;
