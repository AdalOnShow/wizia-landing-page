import Navbar from "./components/Navbar.jsx";
import Hero from "./constants/Hero.jsx";
import Brands from "./constants/Brands.jsx";
import Service from "./constants/Service.jsx";

const App = () => {
    return (
        <main className="font-montserrat text-white">
            <Navbar />
            <Hero />
            <Brands />
            <Service />
        </main>
    )
}
export default App
