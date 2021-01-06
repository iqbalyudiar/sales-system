import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ShowOrder = () => {
  return (
    <div>
      <h3>List Pesanan</h3>
      <button className="btn btn-primary">
        <Link className="text-light" to="/createOrder">
          Buat Pesanan
        </Link>
      </button>
    </div>
  );
};

export default ShowOrder;
