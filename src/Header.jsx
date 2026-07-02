import Nav from "./Nav"
function Header() {
  return (
   <>
   <header style={{display:"flex",justifyContent:"center",gap:"50px"}}>
   <img   height={50}  width={80}  src="https://zerodha.com/static/images/logo.svg" alt="" />
   <Nav/>
   </header>

   </>
  )
}

export default Header