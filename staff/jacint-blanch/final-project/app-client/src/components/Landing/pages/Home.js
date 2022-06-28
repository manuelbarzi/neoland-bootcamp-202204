import  React from 'react';
import '../Landing.css'
import Section from '../Section'
import Cards from '../Cards';
import Footer from '../Footer';

function Home() { 
    return(
        <div>
            <div>
                <Section />
            </div>
            <div>
                <Cards />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home
