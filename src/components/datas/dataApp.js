import TumblrIcon from "../icons/TumblrIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";

const style = "portfolio-icon";

const dataApp = {
    headerName: "Nguyen Quang",
    headerTitle: "Développeur Web",
    footerLinks: [
        { href: "https://qiuubi.tumblr.com/", name: "Tumblr", icon: <TumblrIcon style={style} /> },
        { href: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", name: "Linkedin", icon: <LinkedinIcon style={style} /> },
        { href: "https://www.instagram.com/qiuubii/", name: "Instagram", icon: <InstagramIcon style={style} /> },
        { href: "https://www.facebook.com/QiuubiArt", name: "Facebook", icon: <FacebookIcon style={style} /> },
        /* The following profiles are empty in this moment
        { link: "#exp", name: "Artstation" },
        { link: "#projects", name: "Pixiv" },
        { link: "#interests", name: "GumRoad" },
        { link: "#interests", name: "Pinterest" }
        */
    ],
    footerFrameworkTitle: "React.js",
    footerFrameworkLink: "https://react.dev/"
}

export default dataApp;