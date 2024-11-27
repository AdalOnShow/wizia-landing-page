import ServiceCart from "../components/ServiceCart.jsx";
import { services } from "../constants/index.js";

const Service = () => {
    return (
        <section className="px-6">
            <div className="container mx-auto max-w-[1200px] py-[120px] flex justify-center items-start flex-wrap gap-6 space-y-12 md:space-y-0">
                {services.map((service, i) => (
                    <ServiceCart key={i} {...service} />
                ))}
            </div>
        </section>
    )
}
export default Service
