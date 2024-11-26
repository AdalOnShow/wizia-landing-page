/* eslint-disable react/prop-types */
const Button = ({ label, bgColor, bigBtn, className }) => {
    return (
        <button
            className={`flex-center gap-1 font-workSans font-medium text-sm rounded-full ${bigBtn ? "py-4 px-[18px] w-full sm:w-[216px]" : "py-2.5 px-4"} ${bgColor ? "bg-teal-50 text-teal-300" : "bg-transparent text-white border border-white"} ${className}`}>
            {label}
            {bigBtn ? (<img src="/arrow-up.svg" alt="arrow" className="size-5" />) : ""}
        </button>
    )
}
export default Button
