function Footer(props) {
    const links = props.links.map((link) =>
        <li><a className="" href={link.href}>{link.icon}</a></li>
    );
    return (
        <footer class="cv-footer">
            <p>Ce CV est réalisé grâce à <a href={props.frameworkLink}>{props.title}</a></p>
            <ul>
                {links}
            </ul>
        </footer>
    );
}

export default Footer;