import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Brands from "./sections/Brands.jsx";
import Service from "./sections/Service.jsx";

const App = () => {
    return (
        <main className="font-montserrat text-white bg-teal-300">
            <Navbar />
            <Hero />
            <Brands />
            <Service />
        </main>
    )
}
export default App
