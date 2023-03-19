import Education from "./Education";
import Experiences from "./Experiences";
import Projects from "./Projects";
import dataMain from "./datas/dataMain";

function Main() {
    return (
        < section className="cv-main" >
            <Education educTitle={dataMain.educTitle} educList={dataMain.educList} />
            <Experiences
                expTitle={dataMain.expTitle}
                webTitle={dataMain.webTitle}
                webExps={dataMain.webExps}
                legalTitle={dataMain.legalTitle}
                legalExps={dataMain.legalExps} />
            <Projects />
        </section >
    )
}

export default Main;