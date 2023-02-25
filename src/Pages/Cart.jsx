import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className='container mt-5 text-center' style={{height:'57vh'}}>
      <div className="row">
        <div className="col-md-12">
          <h1>Cart Page</h1>
          <div className='' >
          <i className="bi bi-basket-fill" style={{fontSize:'100px', color:"#08355E"}}></i>
          </div>
          <Link to='/article' className='btn btn-outline-danger btn-lg'>Articles</Link>
        </div>  
      </div>
    </div>
  );
};

export default Cart;