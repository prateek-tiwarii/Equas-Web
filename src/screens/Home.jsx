import { useEffect } from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/OurSolutions';
import Who from '../components/Who';
import Carousel from '../components/Uncover.jsx';




const Home = () => {

    useEffect(() => {
        const gradientBg = document.querySelector('.gradient-background');
        if (gradientBg) {
            gradientBg.classList.remove('not-home');
        }

        return () => {

            if (gradientBg) {
                gradientBg.classList.add('not-home');
            }
        };
    }, []);

    return (
        <div>
            <Hero />


            <div className="other-content">
                <BentoGrid />
                <Carousel />
                <Who />


            </div>
        </div>
    );
};

export default Home;