import './Header.styles.css';
import { Link } from 'react-router-dom';

const Header = function() {

    const handleSmoothScroll = function(e) {
        // console.log(e.target.classList.contains('nav-list') );
        e.preventDefault();
        if(!e.target.classList.contains('nav-list')) return;
        const id = e.target.getAttribute('data-id');
        // const element = document.querySelector(id);
        // element.scrollIntoView({behavior: 'smooth'})
        console.log(element);
    }
    
    return (
        <header>
            <nav>
                <ul onClick={handleSmoothScroll}>
                    <li className='nav-list' data-id='#get-started'> Get Started </li>
                    <li className='nav-list' data-id='#about-us'> About </li>
                    <li className='nav-list' data-id='#contact'> Contact </li>
                </ul>
            </nav>
            <section className='header-body'>
                <h1>Online votes</h1>
                <section className='header-descriptions'>
                    <p>
                        Get your data and information with comfort, organise voting and let other exercise their power to vote with ease
                    </p>
                    <p>Fill out your personal details and begin with to create your criteria. You poll station / Hub.</p>
                    <Link to="/form" > <button>Begin</button> </ Link>
                </section>
            </section>      
        </header>
    )
}

export default Header;