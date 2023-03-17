function Project(props) {

    const projects = props.projects.map((project) =>
        <article key={project.number} className="project" >
            <h4>{project.title}</h4>
            <p className="projects-description">{project.description}</p>
            <p>Tâches et réalisations :</p>
            <ul>
                {project.tasks.map((task) => <li key={task.id.toString()}>{task.content}</li>)}
            </ul>
            <p>Environnement technique :</p>
            <ul>
                {project.techs.map((tech) => <li key={tech.id.toString()}>{tech.name} : {tech.content}</li>)}
            </ul>
        </article >
    );

    return (
        <section>
            <h2>{props.title.toUpperCase()}</h2>
            {projects}
        </section>
    );

}

export default Project;