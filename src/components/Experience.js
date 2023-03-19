function Experience(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {props.exps.map((exp) =>
                    <li key={exp.id}><span>{exp.date}</span> - {exp.name} - {exp.company} - {exp.town}</li>
                )}
            </ul>
        </div>
    )
}

export default Experience;