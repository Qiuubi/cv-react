function Interests(props) {
    const interests = props.interests.map((interest) =>
        <li>{interest}</li>
    );
    return (
        <section className="cv-interests">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {interests}
            </ul>
        </section>
    );
}

export default Interests;