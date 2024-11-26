import Button from "../components/Button.jsx";

const Hero = () => {
    return (
        <section className="bg-[url(/hero-bg.png)] bg-cover bg-no-repeat bg-center">
            <div className="max-w-[1200px] py-[110px] container mx-auto flex flex-col justify-center items-center md:items-start px-4 xl:px-0">
                <h4 className="text-2xl font-normal text-teal-50 tracking-[5%]">AI SDRs (aiDRs)</h4>

                <h1 className="font-bold text-[40px] md:text-[64px] leading-[44px] md:leading-[78px] tracking-[-1%]">
                    More <span className="font-medium italic">leads</span>, <br />
                    less <span className="font-medium italic">people</span>.
                </h1>

                <p className="font-light font-workSans text-lg md:text-xl pt-2.5 text-center md:text-left md:max-w-[470px]">Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>

                <Button label="Sign Up for the Beta" bgColor bigBtn className="mt-6" />
            </div>
        </section>
    )
}
export default Hero
