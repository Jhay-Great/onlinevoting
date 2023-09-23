import facebookLogo from '../../assets/Facebook.png';
import TwitterLogo from '../../assets/iconTwitter.svg';
import InstgramLogo from '../../assets/Instagram.png';
import YoutubeLogo from '../../assets/iconYoutube.png';

import './Contact.styles.css';

const Contact = function() {
    return (
        <section>
            <div className='contact-logo'><img src={TwitterLogo} alt="facebook logo" /></div>
            <div className='contact-logo'><img src={InstgramLogo} alt="facebook logo" /></div>
            <div className='contact-logo'><img src={YoutubeLogo} alt="facebook logo" /></div>
            <div className='contact-logo'>
                <img src={facebookLogo} alt="facebook logo" />
            </div>
        </section>
    )
}
export default Contact;