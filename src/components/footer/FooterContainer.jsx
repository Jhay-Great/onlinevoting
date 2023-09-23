import Contact from "./Contact";
import './FooterContainer.styles.css';
import FooterDetails from "./FooterDetails";

const Footer = function() {
    return (
        <footer>
            <Contact />
            <FooterDetails />
        </footer>
    )
}

export default Footer;