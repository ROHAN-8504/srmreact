
function Card(props) {
  return (
    <>
    <span style={{width:"200px"}} >
    <img height={200}  width={200}  src={props.img} alt="" />
     <p>{props.title}</p>
     <p>{props.price}</p>
    </span>
    </>
  )
}

export default Card

