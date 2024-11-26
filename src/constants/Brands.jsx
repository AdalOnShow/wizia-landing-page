import { brandsLogos } from "./index.js";

const Brands = () => {
    return (
        <section className="w-full bg-teal-200 pt-6 md:pt-8 pb-6 md:pb-10">
            <div className="container mx-auto px-4 flex-center flex-col">
                <h4 className="text-base tracking-[5%] text-teal-50 uppercase">our trusted partners</h4>

                <div className="flex-center flex-wrap mt-6 mx-4 md:mx-0 md:gap-8">
                    {brandsLogos.map(({ id, img }) => (
                        <img key={id} src={img} alt={id} className="w-[110.77px] h-[55.38px] sm:w-[128px] sm:h-16" />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Brands
