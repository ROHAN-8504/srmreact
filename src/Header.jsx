import Nav from "./Nav"
function Header({setsearchquery}) {
 
  let darkmode=()=>{
   document.body.classList.toggle('mode')
  }

  return (
   <>
   <header style={{display:"flex",justifyContent:"center",gap:"50px", marginBottom:'20px'}}>
   <img   height={50}  width={80}  src="https://zerodha.com/static/images/logo.svg" alt="" />
   <input onChange={(e)=>{setsearchquery(e.target.value)}}  type="text" />
   <Nav/>
   <button onClick={darkmode} >dark/light</button>
   </header>

   </>
  )
}

export default Header