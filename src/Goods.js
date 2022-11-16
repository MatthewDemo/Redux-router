function Goods (props) {
    return (
        <div className="good">
            <h1>{props.title}</h1>
            <p>{props.ocost}</p>
            <img src={props.img} alt="{props.title}" />
        </div>
    )
}

export default Goods