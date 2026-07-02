
function Card(props) {
  return (
    <>
    <span>
    <img src={props.img} alt="" />
     <p>{props.title}</p>
     <p>{props.address}</p>
    </span>
    </>
  )
}

export default Card

