function Portfolio(props) {
    return (
        <section className="cv-portfolio">
            <h2>{props.title.toUpperCase()}</h2>
            {props.images.map((image) =>
                <div key={image.id}>
                    <img className="portfolio-img" src={image.img} alt={image.alt} />
                    <a href={image.href} className="portfolio-title">{image.name}</a>
                    {image.tech}
                </div>)}
        </section >
    );
}

export default Portfolio;