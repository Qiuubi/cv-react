import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "../Footer";
import TumblrIcon from "./icons/TumblrIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";

function Main(props) {
    const educTitle = "Formations et certifications";
    const educList = [
        { number: 1, school: "3W Academy", name: "Développeur intégrateur en réalisation d’applications web", date: "2020-2022" },
        { number: 2, school: "EDASOP", name: "CAPA", date: "2016-2017" },
        { number: 3, school: "UT1 Capitole", name: "Master 2 Droit Privé Fondamental", date: "2013-2014" }
    ];

    const expTitle = "Expériences professionnelles";
    const webTitle = "Web";
    const webExps = [
        { number: 1, name: "Développeur Web", company: "Occitech", town: "Toulouse", date: "Nov 2022 -  Févr. 2023" },
        { number: 2, name: "Développeur Web", company: "Fragrance et Beauté Françaises", town: "Castres", date: "Sept. 2020 - Sept. 2022" }
    ];
    const legalTitle = "Juridique";
    const legalExps = [
        { number: 1, name: "Juriste d'affaires", company: "VINCI Energies", town: "Toulouse", date: "Mars 2019 - Juill. 2019" },
        { number: 2, name: "Juriste", company: "Metis AVOCATS", town: "Toulouse", date: "Nov 2017 - Juin 2018" },
        { number: 3, name: "Elève-avocat stagiaire", company: "Me. Agba, Me. Frisch et Me. Nidecker", town: "Toulouse", date: "Mars 2017 - Sept. 2017" },
        { number: 4, name: "Juriste stagiaire", company: "Pierre Fabre Dermo-Cosmétique", town: "Lavaur", date: "Sept. 2016 - Mars 2017" },
    ];
    const styleIcon = "portfolio-icon";
    const links = [
        { href: "https://qiuubi.tumblr.com/", name: "Tumblr", icon: <TumblrIcon style={styleIcon} /> },
        { href: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", name: "Linkedin", icon: <LinkedinIcon style={styleIcon} /> },
        { href: "https://www.instagram.com/qiuubii/", name: "Instagram", icon: <InstagramIcon style={styleIcon} /> },
        { href: "https://www.facebook.com/QiuubiArt", name: "Facebook", icon: <FacebookIcon style={styleIcon} /> },
        /* The following profiles are empty in this moment
        { link: "#exp", name: "Artstation" },
        { link: "#projects", name: "Pixiv" },
        { link: "#interests", name: "GumRoad" },
        { link: "#interests", name: "Pinterest" }
        */
    ];
    const frameworkTitle = "React.js";
    const frameworkLink = "https://react.dev/";

    return (
        < section className="cv-main" >
            <Education educTitle={educTitle} educList={educList} />
            <Experience
                expTitle={expTitle}
                webTitle={webTitle}
                webExps={webExps}
                legalTitle={legalTitle}
                legalExps={legalExps} />
            <Projects />
            <Footer links={links} title={frameworkTitle} frameworkLink={frameworkLink} />
        </section >
    )
}

export default Main;