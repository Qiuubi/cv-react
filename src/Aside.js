import Coordinates from "./components/Coordinates";
import Interests from "./components/Interests";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ShopifyIcon from "./components/icons/ShopifyIcon";
import essenceDesNotes from "./assets/img/portfolio/essence-des-notes.jpg";
import whiteLeaf from "./assets/img/portfolio/white-leaf.jpg";
import earPro from "./assets/img/portfolio/earpro.jpg";

function Aside() {

    const coordinateTitle = "Coordonées";
    const coordinates = [
        "Toulouse, France", "quang.nguyen.fr@gmail.com"
    ];
    const links = [
        { id: 1, name: "Linkedin", href: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", icon: "fa-brands fa-linkedin" },
        { id: 2, name: "Github", href: "https://github.com/Qiuubi", icon: "fa-brands fa-square-github" },
        { id: 3, name: "Facebook", href: "https://www.facebook.com/QiuubiArt", icon: "fa-brands fa-square-facebook" },
    ];
    const skillTitle = "Compétences";
    const skills = [
        { id: 1, name: "Methodologies", content: "Cycle en V, Agile" },
        { id: 2, name: "Langages", content: "HTML CSS, PHP, JavaScript" },
        { id: 3, name: "Frameworks", content: "CakePHP, Symfony, React JS" },
        { id: 4, name: "BDD", content: "MySQL, MariaDB" },
        { id: 5, name: "Intégration continue", content: "Jenkins, Docker" },
        { id: 6, name: "Serveur", content: "Apache" },
        { id: 7, name: "Système", content: "MacOS, Linux Manjaro" },
        { id: 8, name: "Outils", content: "VSCode, PHPStorm, Git" }
    ];
    const interestTitle = "Centre d'intérêts";
    const interests = [
        "Le dessin et l’illustration",
        "Les jeux vidéo",
        "L’informatique",
        "Le cinéma et les séries",
        "Le manga et l’anime",
        "Le voyage",
        "L’écriture et littérature",
    ];
    const portfolioTitle = "Portfolio";
    const styleIcon = "portfolio-icon";
    const images = [
        { id: "1", name: "Essence Des Notes", img: essenceDesNotes, alt: "images site essence des notes", href: "https://www.lessencedesnotes.com/", tech: <ShopifyIcon style={styleIcon} />, altIcon: "icône Shopify" },
        { id: "2", name: "White Leaf", img: whiteLeaf, alt: "images site white leaf", href: "https://whiteleaf-care.com/", tech: <ShopifyIcon style={styleIcon} />, altIcon: "icône Shopify" },
        { id: "3", name: "Ear Pro", img: earPro, alt: "images site earpro", href: "https://www.earpro.fr/", tech: <ShopifyIcon style={styleIcon} />, altIcon: "icône Shopify" },
    ];
    return (
        <aside className="cv-aside">
            <Coordinates title={coordinateTitle} coordinates={coordinates} links={links} />
            <Skills title={skillTitle} skills={skills} />
            <Interests title={interestTitle} interests={interests} />
            <Portfolio title={portfolioTitle} images={images} />
        </aside >
    );
}

export default Aside;