function Education(props) {
    const list = props.educList.map((diploma) =>
        <li key={diploma.number}><span>{diploma.date} </span> - {diploma.school} - {diploma.name}</li>
    );
    return (
        <section id="education" className="cv-quang-educ">
            <h2>{props.educTitle.toUpperCase()}</h2>
            <ul>
                {list}
            </ul>
        </section>
    )
}

export default Education;