function Skills(props) {
    const skills = props.skills.map((skill) =>
        <li key={skill.id.toString()}>{skill.name} - {skill.content}</li>
    );
    return (
        <section id="skills" className="cv-skills">
            <h2>{props.title.toUpperCase()}</h2>
            <ul>
                {skills}
            </ul>
        </section>
    );
}

export default Skills;