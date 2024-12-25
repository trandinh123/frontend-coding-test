import '@/styles/pages/landingPage/index.scss';
import Hero from './components/sections/Hero';
import ModelList from './components/sections/ModelList';
import OurStories from './components/sections/OurStories';
import WhyChooseUs from '@/app/landing-page/components/sections/WhyChooseUs';
import ContactUs from './components/sections/ContactUs';
import Footer from '../../components/Footer';
import Header from '@/components/Header';

export default function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <ModelList />
            <OurStories />
            <WhyChooseUs />
            <ContactUs />
            <Footer />
        </div>
    );
}
