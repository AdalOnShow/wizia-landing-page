/* eslint-disable react/prop-types */
import { navItems } from "../constants/index.js";
import Button from "./Button.jsx";

const MobileNav = ({ toggleMenu }) => {
    return (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-teal-300 z-50 p-6 overflow-y-hidden">
            <div className="flex justify-between items-center pb-6">
                <a href="/">
                    <img src="/logo.svg" alt="logo" className="w-16 h-[14px]" />
                </a>
                <button onClick={toggleMenu} aria-label="Close Menu" className="m-1">
                    <img src="/close.svg" alt="menu" className="size-6" />
                </button>
            </div>

            <div className="flex-center flex-col gap-4">
                <div className="flex-center flex-col">
                    {navItems.map(({ name, href }, id) => (
                        <a href={href} key={id}>
                            <p className="block font-workSans text-base active:text-white/80 transition-all duration-200 py-4">{name}</p>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col w-full justify-center items-center gap-3">
                    <Button label="Book a Demo" bgColor className="w-full" />
                    <Button label="Contact Us" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default MobileNav
