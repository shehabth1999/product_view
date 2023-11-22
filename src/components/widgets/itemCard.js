import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from "./starsRating"
// const StarRating =React.lazy(()=>import("./starsRating"));
import { Link } from 'react-router-dom';

function KitchenSinkExample({ data }) {
  return (
    <>
    <div className='row' style={{margin:"32px", padding:"32px"}}>
      {data.map((item) => (
        <div className='col-4 py-3' key={item.id}> 
        <Card style={{ width: '18rem' }}>
          <div style={{width:"100%",height:"300px",overflow:"hidden"}}>
          <Card.Img variant="top" src={item.thumbnail} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className='single-line-ellipsis'>{item.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
            <ListGroup.Item>Rating: <StarRating rating={item.rating}></StarRating> </ListGroup.Item>
            {item.stock<=0? <h5 className="text-danger py-2 mx-3">out of stock</h5> : <h5 className="text-success py-2 mx-3">in stock</h5> }
          </ListGroup>
          <Card.Body>
            <Link className='btn btn-success' to={`/product-detiles/${item.id}`}>Detiles</Link>
          </Card.Body>
        </Card>
        
        </div>
        
      ))}
      </div>
    </>
  );
}

export default KitchenSinkExample;
