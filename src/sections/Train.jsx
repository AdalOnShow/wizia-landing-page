const Train = () => {
    return (
        <section className="px-6">
            <div
                className="container mx-auto max-w-[1344px] bg-[url(/train-bg.png)] bg-cover bg-no-repeat p-8 md:py-[114px] rounded-[24px] relative flex-center">
                <div className=" relative -right-0 lg:-right-20 xl:-right-40 ">
                    <h2 className="font-semibold text-[28px] md:text-[40px]">
                        Train your aiDR on your... <br />
                        <span className="italic text-teal-50">prefered email st|</span>
                    </h2>

                    <p className="mt-6 md:mt-[30px] font-workSans font-light text-lg md:text-xl max-w-[400px]">You’re in
                        control. Train your
                        aiDR on elements of your Marketing strategy.</p>

                    <div className="mt-[30px] md:mt-16 md:grid md:grid-cols-2">
                        {
                            ["Quick to ramp", "Easy to optimize", "Quick to scale up", "Works with all your existing tools"].map((item, i) => (
                                <div key={i} className="flex justify-start gap-2.5 py-2 md:py-6">
                                    <img src="/right-logo.svg" alt="right" className="size-6" />
                                    <p className="font-medium text-base md:text-xl text-teal-50">{item}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Train
