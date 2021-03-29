import {
  FAIL_CONTACTS,
  GET_CONTACTS,
  GET_CONTACT,
  LOAD_CONTACTS,
} from "../actionTypes/contact";
import axios from "axios";

export const getcontacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_CONTACTS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

export const getcontact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response.data });
  }
};

export const postContact = (newuser) => async (dispatch) => {
  try {
    await axios.post("/api/contact", newuser);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response.data });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${id}`);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response.data });
  }
};

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contact/${id}`, newContact);
    dispatch(getcontacts());
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response.data });
  }
};
