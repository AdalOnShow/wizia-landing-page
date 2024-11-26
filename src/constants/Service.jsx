import ServiceCart from "../components/ServiceCart.jsx";
import {services} from "./index.js";

const Service = () => {
    return (
        <section className="bg-teal-300 px-6">
            <div className="container mx-auto max-w-[1200px] py-[120px] flex-center flex-wrap gap-6 space-y-12">
                {services.map((service,i)=>(
                    <ServiceCart key={i} {...service}/>
                ))}
            </div>
        </section>
    )
}
export default Service
