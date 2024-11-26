import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Brands from "./sections/Brands.jsx";
import Service from "./sections/Service.jsx";
import Train from "./sections/Train.jsx";
import Reviews from "./sections/Reviews.jsx";
import Improvement from "./sections/Improvement.jsx";

const App = () => {
    return (
        <main className="font-montserrat text-white bg-teal-300">
            <Navbar />
            <Hero />
            <Brands />
            <Service />
            <Train />
            <Reviews />
            <Improvement />
        </main>
    )
}
export default App
