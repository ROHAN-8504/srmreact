import { useState } from "react";
import Card from "./Card";
function Products() {
   const [products, setproducts] = useState([])
    //apicall
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
  return (
    <>
     {
        products.map((p)=>{
          return <Card img={p.image}   title={p.title}  price={p.price}     key={p.id} />
        })
     }
    </>
  )
}

export default Products