import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToItemCart, getTotalPrice } from '../store/slices/cart_data';
import { resetCounter } from '../store/slices/counter';
import ProductQuantitySelector from './counter';
import StarRating from './starsRating';

const ProductDetailsCard = ({ product }) => {
  // Redux state
  const counter = useSelector((state) => state.counter.counter_val);
  const dispatch = useDispatch();

  // Add product to cart
  const handleAddToCart = () => {
    dispatch(
      addToItemCart({
        id: product.id,
        img: product.thumbnail,
        description: product.description,
        quantity: counter,
        price: product.price * counter,
      })
    );
    
    // Display alert
    alert(`${counter} of ${product.title} have been added to your Cart`);

    // Update total price in the cart
    dispatch(getTotalPrice());

    // Reset the counter to 1
    dispatch(resetCounter());
  };

  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '30px' }}>Product Details</h1>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <div
          className="product-details"
          style={{
            height: '700px',
            width: '60%',
            padding: '10px',
            border: '2px solid #000',
            borderRadius: '2em',
          }}
        >
          <div className="row py-2">
            <div className="col-md-6">
              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ borderRadius: '2em', width: '500px', height: '450px' }}
              />
              
              {/* Product Image Thumbnails */}
              <div className="row px-3 py-2">
                {product.images && Array.isArray(product.images) ? (
                  product.images.map((img, index) => (
                    <div className="col-2 px-1" key={index}>
                      <img
                        style={{ width: '100px', height: '100px', margin: '2px' }}
                        src={img}
                        alt={index}
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>

            {/* Product Information */}
            <div className="col-md-6 py-2">
              <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <hr />

                {/* Product Description */}
                <p className="product-description">{product.description}</p>
                <hr />

                {/* Brand and Category */}
                <p className="product-brand">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="product-category">
                  <strong>Category:</strong> {product.category}
                </p>
                <hr />

                {/* Product Price */}
                <div className="product-price">
                  <strong>Price: </strong>
                  <strong style={{ textDecoration: 'line-through' }}>${product.price} </strong>
                  <p style={{ fontSize: '20px', color: 'green' }}>
                    ~ ${Math.floor(product.price - (product.price * product.discountPercentage / 100))}
                  </p>
                  <strong>Save: {Math.floor(product.price * product.discountPercentage / 100)}</strong>
                </div>
                <hr />

                {/* Product Rating */}
                <div className="product-rating ">
                  <strong>Rating:</strong>
                  <StarRating rating={product.rating} />
                </div>

                {/* Stock Availability */}
                {product.stock <= 0 ? (
                  <h5 className="text-danger py-2">out of stock: {product.stock}</h5>
                ) : (
                  <h5 className="text-success py-2">in stock: {product.stock}</h5>
                )}

                {/* Quantity Selector */}
                <ProductQuantitySelector inStock={product.stock} />

                {/* Add To Cart Button */}
                <button className="col-4 py-3 btn btn-success" onClick={handleAddToCart}>
                  Add To Cart
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
