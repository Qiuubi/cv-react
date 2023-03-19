function Interests(props) {
    return (
        <section className="cv-interests">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {props.interests.map((interest) =>
                    <li>{interest}</li>
                )}
            </ul>
        </section>
    );
}

export default Interests;