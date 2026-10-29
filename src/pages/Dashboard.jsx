import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import GetItSold from "../components/GetItSold";
import ListingSearch from "../components/ListingSearch";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Dashboard() {
    return (
        <div id="home">
            <Header />
            <main>
                <Hero />
                <About />
                <GetItSold />
                <ListingSearch />
                <Gallery />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}