/* eslint-disable react/prop-types */
const Button = ({ label, bgColor, className }) => {
    return (
        <button
            className={`font-workSans font-medium text-sm rounded-full py-2.5 px-4 ${bgColor ? "bg-teal-50 text-teal-300" : "bg-transparent text-white border border-white"} ${className}`}>
            {label}
        </button>
    )
}
export default Button
