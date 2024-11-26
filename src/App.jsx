import Navbar from "./components/Navbar.jsx";
import Hero from "./constants/Hero.jsx";
import Brands from "./constants/Brands.jsx";

const App = () => {
    return (
        <main className="font-montserrat text-white">
            <Navbar />
            <Hero />
            <Brands />
        </main>
    )
}
export default App
