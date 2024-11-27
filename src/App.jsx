import Navbar from "./components/Navbar.jsx";
import {
    Hero, Brands, Service, Train, Reviews, Improvement, GetStarted, Footer,
} from './sections'

const App = () => {
    return (<main className="font-montserrat text-white bg-teal-300">
        <Navbar />
        <Hero />
        <Brands />
        <Service />
        <Train />
        <Reviews />
        <Improvement />
        <GetStarted />
        <Footer />
    </main>)
}
export default App
