import { navItems } from "../constants/index.js";
import Button from "./Button.jsx";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav.jsx";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

    useEffect(() => {
        const bodyClass = document.body.classList;
        isMenuOpen ? bodyClass.add("no-scroll") : bodyClass.remove("no-scroll");
        return () => bodyClass.remove("no-scroll");
    }, [isMenuOpen]);


    return (
        <header className="py-6 bg-teal-300 border-b border-[#183A40]">
            <div
                className="container mx-auto max-w-[1200px] flex justify-between items-center gap-2.5 px-6 md:px-10 xl:px-0">
                <a href="/">
                    <img src="/logo.svg" alt="logo" className="w-16 h-[14px] md:w-[91px] md:h-5" />
                </a>

                <div className="hidden md:flex justify-center items-center gap-4">
                    {navItems.map(({ name, href }, id) => (<a href={href} key={id}>
                        <p className="font-workSans text-base hover:text-white/80 transition-all duration-200">{name}</p>
                    </a>))}
                </div>

                <div className="hidden md:flex justify-center items-center gap-3">
                    <Button label="Book a Demo" bgColor />
                    <Button label="Contact Us" />
                </div>

                <button onClick={toggleMenu} className="m-1 block md:hidden">
                    <img src="/menu.svg" alt="menu" className="size-6" />
                </button>
            </div>

            {isMenuOpen && <MobileNav toggleMenu={toggleMenu} />}
        </header>
    )
}
export default Navbar
