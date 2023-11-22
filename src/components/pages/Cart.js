import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeItemCart , getTotalPrice} from '../store/slices/cart_data'
import { Link } from 'react-router-dom';


export default function CartPage() {
  const cartItems = useSelector((state) => state.cartData.cart_item);
  const total = useSelector((state) => state.cartData.totalPrice);
  const dispatch = useDispatch();


  if (total === 0)
  {
    return (<div className="container-fluid mt-100">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5>Cart</h5>
          </div>
          <div className="card-body cart">
            <div className="col-sm-12 empty-cart-cls text-center">
              <img
                src="https://i.imgur.com/dCdflKN.png"
                width="130"
                height="130"
                className="img-fluid mb-4 mr-3"
                alt="Empty Cart"
              />
              <h3>
                <strong>Your Cart is Empty</strong>
              </h3>
              <h4>Add something to make me happy :)</h4>
              <Link to="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">
                continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>);

  }

  else{

    return (
      <>
      <div style={{ marginLeft: '300px', paddingTop: '100px' }}>
        <h1>Your Cart</h1>
      </div>
      <div className='container row mt-5 pt-5'>
        <div className='col-3'></div>
        <div className='col-4'>
          <h5>Description</h5>
        </div>
        <div className='col-3 d-flex justify-content-center text-center'>
          <h5>Quantity</h5>
        </div>
        <div className='col-1'>
          <h5>Remove</h5>
        </div>
        <div className='col-1'>
          <h5 className='text-center '>Price</h5>
        </div>
      </div>

      <hr style={{ width: '70%' }} />

      {cartItems.map((item, index) => (
        <div className='container row' style={{ height: '200px' }} key={index}>
          <div className='col-3'>
            <img
              className='my-image mx-5 img-fluid rounded'
              src={item.img}
              alt={index}
              width='150'
              height='150'
            />
          </div>
          <div className='col-4'>
            <p>{item.description}</p>
          </div>
          <div className='col-3 d-flex align-items-center justify-content-center text-center' >
            <h4 >{item.quantity}</h4>
          </div>
          <div className='col-1 d-flex align-items-center justify-content-center text-center'>
            <button className='btn btn-danger' onClick={()=>{dispatch(removeItemCart(item.id)); dispatch(getTotalPrice())}}>X</button>
          </div>
          <div className='col-1 d-flex align-items-center justify-content-center text-center text-success'>
            <h4>{item.price } $</h4>
          </div>
          <hr />
        </div>
      ))}
      <div>
        <h3 className='text-success p-2' style={{marginLeft:"57%",outline:"1px solid black",width:"200px",marginBottom:"100px"}}>TOTAL: {total} $</h3>
      </div>
    </>
    );
  }
}
