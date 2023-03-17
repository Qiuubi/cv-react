function Header(props) {
    return (
        <nav className="nav-cv">
            <h1 id="cv-name">{props.name.toUpperCase()}</h1>
            <h4>{props.title.toUpperCase()}</h4>
        </nav>
    )
}

export default Header;