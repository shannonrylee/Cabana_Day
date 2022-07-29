const CabanaCard = (props) => {
    return(
        <div>
            <h3>{props.location}</h3>
            <h3>{props.types}</h3>
            <h3>{props.price}</h3>
            <img src={props.image} alt={props.location}/>
        </div>
    )
}
export default CabanaCard