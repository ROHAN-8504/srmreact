import { useState,useEffect } from "react";
import Card from "./Card";
function Products({searchquery}) {
   const [products, setproducts] = useState([])
    //apicall

     useEffect(() => {
     
         fetch('https://srm-ecombackend.onrender.com/products')
       .then(response => response.json())
       .then(data => setproducts(data));
     
      
     }, [])
     
  let filterproducts= products.filter((p)=>{
     return p.title.toLowerCase().includes(searchquery.toLowerCase())
   })




  return (
    <>
    <div style={{display:'flex',flexWrap:'wrap', gap:'20px'}}>
      {
        filterproducts.map((p)=>{
          return <Card img={p.image}   title={p.title}  price={p.price}     key={p.id} />
        })

      }
     </div>
     
    </>
  )
}

export default Products