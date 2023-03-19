import Experience from "./Experience";

function Experiences(props) {
    return (
        <section className="cv-quang-work-exp">
            <h2>{props.expTitle.toUpperCase()}</h2>
            <Experience title={props.webTitle} exps={props.webExps} />
            <Experience title={props.legalTitle} exps={props.legalExps} />
        </section>
    )
}

export default Experiences;