import Project from "./Project";
import dataProjects from "./datas/dataProjects";

function Projects() {
    return (
        <section className="cv-quang-projects">
            <Project projects={dataProjects.pro} title={dataProjects.proTitle} />
            <Project projects={dataProjects.perso} title={dataProjects.persoTitle} />
        </section >
    )
}

export default Projects;