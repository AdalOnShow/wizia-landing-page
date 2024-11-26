const Improvement = () => {
    return (
        <section className="px-6">
            <div
                className="container mx-auto max-w-[1344px] bg-[url(/Improvement-bg.png)] bg-cover bg-right bg-no-repeat p-6 md:pt-[49px] lg:pt-[69px] md:pb-[70px] lg:pb-[92px] lg:px-[72px] rounded-[24px] relative">
                <div className="flex flex-col items-start justify-start max-w-[600px]">
                    <h2 className="font-semibold text-[28px] md:text-[32px] leading-[35px] md:leading-10">Allocate effort where your reps make an
                        inpact.</h2>

                    <h3 className="font-medium italic text-2xl md:text-[32px] leading-[30px] md:leading-10 text-teal-50 mt-2">Let us handle the
                        rest.</h3>

                    <p className="font-light font-workSans text-lg md:text-xl leading-[23px] md:leading-[26px] mt-6 md:mt-[17px]">Keep your reps “in the air”
                        -- out in the field and on the phone where they can build relationships.</p>

                    <div className="flex items-start justify-start lg:flex-center gap-6 mt-[30px] md:mt-[50px] lg:mt-[94px] flex-wrap">
                        {
                            [{ percent: 32, text: "Improvement in Open Rates", },
                            { percent: 75, text: "Improvement in Ramp Time", },
                            { percent: 35, text: "Improvement in Meetings Booked", }].map(({ percent, text }, i) => (
                                <div key={i} className="lg:max-w-[180px]">
                                    <h2 className="font-bold text-[32px] md:text-[40px] text-teal-50">{percent}%</h2>
                                    <p className="font-medium text-lg md:text-xl mt-2.5">{text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Improvement
