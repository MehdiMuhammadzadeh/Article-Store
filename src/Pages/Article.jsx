import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { data } from "../data";


const Article = ({passData}) => {

  const [addTocart, setAddToCart] = useState(0)




  const handleAddToCart = () => {
    passData(addTocart)
    setAddToCart(addTocart + 1);
    Swal.fire({
      title: "Cart Updated",
      icon: "success",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 2000,
      toast: true,
      position: "top",
    })
  }

  return (
    <div className="container mt-5">
      <div className="row g-3">
        {data &&
          data.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="shadow p-3">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title m-2">{item.title}</h6>
                    <Link onClick={handleAddToCart} className="btn btn-danger mt-3">Add Article</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Article;
