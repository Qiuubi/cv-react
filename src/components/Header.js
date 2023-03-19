function Header({ name, title }) {
    return (
        <nav className="nav-cv">
            <h1 id="cv-name">{name.toUpperCase()}</h1>
            <h4>{title.toUpperCase()}</h4>
        </nav>
    )
}

export default Header;