import Coordinates from "./Coordinates";
import Interests from "./Interests";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import dataAside from "./datas/dataAside";

function Aside() {
    return (
        <aside className="cv-aside">
            <Coordinates title={dataAside.coordinateTitle} coordinates={dataAside.coordinates} links={dataAside.links} />
            <Skills title={dataAside.skillTitle} skills={dataAside.skills} />
            <Interests title={dataAside.interestTitle} interests={dataAside.interests} />
            <Portfolio title={dataAside.portfolioTitle} images={dataAside.images} />
        </aside >
    );
}

export default Aside;