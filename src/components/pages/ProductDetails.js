import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetailsCard from '../widgets/productDetailsCard'
// const ProductDetailsCard = React.lazy(()=>import('../widgets/productDetailsCard'));



function ProductDetails(){
    const params = useParams();
    const [product,SetListDetails] = useState([]);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`).then((res)=>{
            SetListDetails(res.data);            
        }).catch((error)=>{
            console.log(error);
        })
    },[params.id]);
    
    
    return (
        <>
        <ProductDetailsCard product={product} ></ProductDetailsCard>
        </>
    );
}

export default ProductDetails;