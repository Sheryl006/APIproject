import axios from "axios";
import{ useState,useEffect } from "react";
import  "./Products.css";

export default function Products(){
    const [products,setProducts] = useState([]);
//specifying an api
const getProducts = async () => {
    const response = await axios.get("https://api.apensoftwares.co.ke/api/products/");
    setProducts(response.data);
};

useEffect(() => {
    getProducts();
},[]);

    return(
        <>
 <h1 style={{fontFamily:"-moz-initial",fontWeight:"bolder"}}>Products</h1>
<div className="row">
   {products? products.map((product) => {
    return(
    <>
    <div className="col col-md-4">
        <div className="cards">
<div className="card" style={{maxHeight:"800px"}}>


<div className="card-content">
    
<img src= {product.image} className="img-fluid rounded-start" alt="Brushes" width={200}/>
  <p className="card-text">Name: {product.product}</p>
  <p className="card-text">Price: {product.amount}</p>
  <p className="card-text">Description: {product.description}</p> 
  <p className="card-text">Quantity: {product.quantity}</p>

 <a href={"products/" + product.id} style={{color:"white",tabSize:"10px"}}>View Details</a>
 </div>
  </div>
</div>
</div>
 </>
    );
   }) : null}

   </div>
        
        </>
    );
}