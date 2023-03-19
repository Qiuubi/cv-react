function Coordinates(props) {
    return (
        <section className="cv-coordinates">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {props.coordinates.map((coordinate) =>
                    <li>{coordinate}</li>
                )}
            </ul>
            <ul>
                {props.links.map((link) =>
                    <li >
                        <a href={link.href}>{link.name}</a>
                    </li>
                )}
            </ul>
        </section>
    );
}

export default Coordinates;