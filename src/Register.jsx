import { useState } from "react"
function Register() {
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

   let senduserdetails=async(event)=>{
    event.preventDefault()
   let response=  await  fetch('https://srm-ecombackend.onrender.com/register',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({username,email,password})
      })
    let data= await response.json();
    let jwttoken=data.token
    alert(data.msg)
    localStorage.setItem(jwttoken,jwttoken)

   }

  return (
    <>
    <form onSubmit={senduserdetails}      style={{textAlign:"center"}}   >
      <h1>REGISTRATION FORM</h1>
      <input onChange={(e)=>{setusername(e.target.value)}}   type="text" placeholder="username" /><br />
      <input  onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="email"/><br />
      <input  onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="password" /><br />
      <button type="submit" >Register</button>
    </form>
    </>
  )
}

export default Register