import { useState } from "react"
function Productform() {

 const [title, settitle] = useState("")
 const [price, setprice] = useState("")
 const [image, setimage] = useState("")

  //function whhere its send the product data to backend
  let sendproducts=async (event)=>{
    event.preventDefault()
  let result=  await  fetch('https://srm-ecombackend.onrender.com/products',{
        method:'POST',
        headers:{
                'Content-Type': 'application/json'
                },
        body:JSON.stringify({title,image,price})
       })

   let data=await result.json()
   alert(data.msg)


  }

  return (
    <>
    <form onSubmit={sendproducts} >
      <h2>product data</h2>

      <input  onChange={(e)=>{settitle(e.target.value)}}      type="text" placeholder="title" />
      <input  onChange={(e)=>{setprice(e.target.value)}}  type="text" placeholder="price" />
      <input  onChange={(e)=>{setimage(e.target.value)}}  type="text" placeholder="image" />

      <button type="submit" >submit</button>

    </form>
    </>
  )
}

export default Productform