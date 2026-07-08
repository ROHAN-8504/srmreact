
import { Link } from "react-router-dom"
function Nav() {
  return (
   <>
   <nav style={{display:"flex",gap:"20px",alignItems:"center"}}>

    <Link  to={'/register'} >Signup</Link>
    <Link to={'/products'} >Products</Link>
    <Link to={'/about'} >About</Link>
    <Link to={'/pf'} >Pricing</Link>
  
   
   </nav>
   </>
  )
}

export default Nav