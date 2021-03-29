import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcontacts } from "../JS/actions/contact";
import Contact from "../Compo/Contact/Contact";
const ContactList = () => {
  const contactList = useSelector((state) => state.contactReducer.contactList);
  const loadContact = useSelector((state) => state.contactReducer.loadContact);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcontacts());
  }, []);
  return (
    <div>
      {loadContact ? (
        <h2> sp </h2>
      ) : (
        contactList.map((el) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Contact contact={el} key={el.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default ContactList;
