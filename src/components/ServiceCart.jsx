/* eslint-disable react/prop-types */
const ServiceCart = ({ image, title, desc }) => {
    return (
        <div className="w-full sm:w-[327px] md:w-[384px]">
            <img src={image} alt={title} className="size-10 md:size-16" />
            <h2 className="font-semibold text-2xl md:text-[28px] leading-[30px] md:leading-[35px] mt-6 mb-4">{title}</h2>
            <p className="font-light font-workSans text-lg md:text-[22px] leading-6 md:leading-[29px] max-w-md">{desc}</p>
        </div>
    )
}
export default ServiceCart
