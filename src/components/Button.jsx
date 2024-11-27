/* eslint-disable react/prop-types */
const Button = ({ label, bgColor, bigBtn, className }) => {
    return (<button
        className={`flex-center gap-1 font-workSans font-medium text-sm rounded-full button-shadow ${bigBtn ? "py-4 px-[18px] w-full sm:w-[216px] hover:scale-105" : "py-2.5 px-4"} ${bgColor ? "bg-teal-50 text-teal-300 hover:text-teal-300/80 hover:bg-teal-50/80 transition-all duration-200" : "bg-transparent hover:bg-teal-50 hover:text-teal-300/80 transition-all duration-200 text-white border border-white"} ${className}`}>
        {label}
        {bigBtn ? (<img src="/arrow-up.svg" alt="arrow" className="size-5" />) : ""}
    </button>)
}
export default Button
