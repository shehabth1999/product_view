import axios from "axios";
import React, { useEffect, useState } from "react";
import KitchenSinkExample from '../widgets/itemCard'
// const KitchenSinkExample = React.lazy(import('../widgets/itemCard'));
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){

    const[listItem , setListItem] = useState([]);

    useEffect(()=> {
        axios.get("https://dummyjson.com/products").then((res)=>{
        console.log(res.data.products);
        setListItem(res.data.products);
    }
        ).catch((err)=>console.log(err));
    },[]);

    console.log(listItem["title"]);

    return(
        <div className="container">
        <h1>Home Page</h1>
        <KitchenSinkExample data={listItem}/>
        </div>
    );
}

export default Home;