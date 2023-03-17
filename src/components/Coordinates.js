function Coordinates(props) {
    const coordinates = props.coordinates.map((coordinate) =>
        <li>{coordinate}</li>
    );
    const links = props.links.map((link) =>
        <li >
            <a href={link.href}>
                {link.name}
            </a>
        </li>
    );
    return (
        <section className="cv-coordinates">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {coordinates}
            </ul>
            <ul>
                {links}
            </ul>
        </section>
    );
}

export default Coordinates;