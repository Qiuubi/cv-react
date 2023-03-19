function Skills(props) {
    return (
        <section id="skills" className="cv-skills">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {props.skills.map((skill) =>
                    <li key={skill.id.toString()}>{skill.name} - {skill.content}</li>
                )}
            </ul>
        </section>
    );
}

export default Skills;