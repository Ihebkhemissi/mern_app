import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleADD } from "../JS/actions/edit";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/add">
        <button onClick={() => dispatch(toggleADD())}>Add contact </button>
      </Link>

      <Link to="/">
        <button> Contactlist</button>
      </Link>
    </div>
  );
};

export default Home;
