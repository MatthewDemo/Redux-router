function Header (props) {
    return(
        <>
        <h1>{props.data.site_name}</h1>
        <Nav nav={props.data.nav}/>
        </>
    )
}

function Nav (props) {

    let data = props.nav
    const listItem = data.map((item, idx) => <li key={idx}><a href={item.link}>{item.text}</a></li>)
    return(
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}

export default Header