import Button from "../components/Button.jsx";

const GetStarted = () => {
    return (<section className="py-20 md:py-[96px]">
        <div className="container mx-auto flex-center flex-col space-y-[23px] px-6 md:px-0">
            <h4 className="text-base md:text-xl text-teal-50">GET STARTED</h4>
            <h2 className="font-medium text-4xl leading-[44px] text-center">
                <span className="italic">Embrace</span>
                <span className="font-bold"> the new era of </span>
                <span className="italic">outbound.</span>
            </h2>
            <p className="font-light font-workSans text-lg md:text-xl leading-[26px] text-center">Wizia lets you train,
                activate, and optimize aiDRs. <br className="hidden lg:block" />
                Take your outbound to new levels of performance and efficiency.</p>

            <Button label="Sign Up for the Beta" bgColor bigBtn />
        </div>
    </section>)
}
export default GetStarted
