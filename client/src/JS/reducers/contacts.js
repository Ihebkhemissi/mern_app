import {
  GET_CONTACTS,
  FAIL_CONTACTS,
  LOAD_CONTACTS,
} from "../actionTypes/contact";

const inisialState = {
  contactlist: [],
  loadContact: false,
  errors: null,
};

const contactReducer = (state = inisialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, loadContact: true };
    case GET_CONTACTS:
      return { ...state, contactlist: payload, loadContact: false };
    case FAIL_CONTACTS:
      return { ...state, loadContact: false, errors: payload };

    default:
      return state;
  }
};

export default contactReducer;
