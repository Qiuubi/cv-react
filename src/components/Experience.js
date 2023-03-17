function Experience(props) {
    const webList = props.webExps.map((exp) =>
        <li key={exp.number}><span>{exp.date}</span> - {exp.name} - {exp.company} - {exp.town}</li>
    );
    const legalList = props.legalExps.map((exp) =>
        <li key={exp.number}><span>{exp.date}</span> - {exp.name} - {exp.company} - {exp.town}</li>
    );
    return (
        <section className="cv-quang-work-exp">
            <h2>{props.expTitle.toUpperCase()}</h2>
            <h3>{props.webTitle}</h3>
            <ul>
                {webList}
            </ul>
            <h3>{props.legalTitle}</h3>
            <ul>
                {legalList}
            </ul>
        </section>
    )
}

export default Experience;