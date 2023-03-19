import ShopifyIcon from "./../icons/ShopifyIcon";
import essenceDesNotes from "./../../assets/img/portfolio/essence-des-notes.jpg";
import whiteLeaf from "./../../assets/img/portfolio/white-leaf.jpg";
import earPro from "./../../assets/img/portfolio/earpro.jpg";

const style = "portfolio-icon";

const dataAside = {
    coordinateTitle: "Coordonées",
    coordinates: [
        "Toulouse, France", "quang.nguyen.fr@gmail.com"
    ],
    links: [
        { id: 1, name: "Linkedin", href: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", icon: "fa-brands fa-linkedin" },
        { id: 2, name: "Github", href: "https://github.com/Qiuubi", icon: "fa-brands fa-square-github" },
        { id: 3, name: "Facebook", href: "https://www.facebook.com/QiuubiArt", icon: "fa-brands fa-square-facebook" },
    ],
    skillTitle: "Compétences",
    skills: [
        { id: 1, name: "Methodologies", content: "Cycle en V, Agile" },
        { id: 2, name: "Langages", content: "HTML CSS, PHP, JavaScript" },
        { id: 3, name: "Frameworks", content: "CakePHP, Symfony, React JS" },
        { id: 4, name: "BDD", content: "MySQL, MariaDB" },
        { id: 5, name: "Intégration continue", content: "Jenkins, Docker" },
        { id: 6, name: "Serveur", content: "Apache" },
        { id: 7, name: "Système", content: "MacOS, Linux Manjaro" },
        { id: 8, name: "Outils", content: "VSCode, PHPStorm, Git" }
    ],
    interestTitle: "Centre d'intérêts",
    interests: [
        "Le dessin et l’illustration",
        "Les jeux vidéo",
        "L’informatique",
        "Le cinéma et les séries",
        "Le manga et l’anime",
        "Le voyage",
        "L’écriture et littérature",
    ],
    portfolioTitle: "Portfolio",
    images: [
        { id: "1", name: "Essence Des Notes", img: essenceDesNotes, alt: "images site essence des notes", href: "https://www.lessencedesnotes.com/", tech: <ShopifyIcon style={style} />, altIcon: "icône Shopify" },
        { id: "2", name: "White Leaf", img: whiteLeaf, alt: "images site white leaf", href: "https://whiteleaf-care.com/", tech: <ShopifyIcon style={style} />, altIcon: "icône Shopify" },
        { id: "3", name: "Ear Pro", img: earPro, alt: "images site earpro", href: "https://www.earpro.fr/", tech: <ShopifyIcon style={style} />, altIcon: "icône Shopify" },
    ]
}

export default dataAside;