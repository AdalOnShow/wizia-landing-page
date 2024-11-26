import { useState } from "react";
import { reviews } from "../constants/index.js";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="py-20 md:pt-[96px] md:pb-20 px-4">
            <div className="container mx-auto max-w-[1200px] relative">
                {/* Slides */}
                {<div className="overflow-hidden rounded-lg flex-center">
                    <div className="flex-center flex-col gap-11 sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[950px] transition-all duration-500">
                        <div className="size-[56px] md:size-[74px] rounded-full flex-center bg-[#183A40]">
                            <img src="/quot.png" alt="qout" className="w-[27.27px] md:w-[36.04px] h-[21.92px] md:h-[28.97px]" />
                        </div>

                        <h2 className="font-workSans font-light text-2xl md:text-[32px] leading-[31px] md:leading-[42px] text-center">{reviews[currentIndex
                        ].content}</h2>

                        <div>
                            <h3 className="font-workSans font-semibold text-lg md:text-2xl leading-7 md:leading-9 text-center text-teal-50">{reviews[currentIndex].author}</h3>
                            <p className="font-workSans text-base md:text-xl leading-6 md:leading-[30px] text-center text-[#96ACAF]">{reviews[currentIndex].title}</p>
                        </div>

                    </div>
                </div>
                }
                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 bg-[#1e3e43] p-3 rounded-[8px] hover:bg-teal-200 transition-all duration-200"
                >
                    <img src="/arrow.svg" alt="arrow" className="rotate-180" />
                </button>
                <button
                    onClick={nextSlide}
                    className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 bg-[#1e3e43] p-3 rounded-[8px] hover:bg-teal-200 transition-all duration-200"
                >
                    <img src="/arrow.svg" alt="arrow" className="" />
                </button>

                {/* Indicators */}
                <div className="flex justify-center mt-[44px] space-x-6">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            className={`size-2.5 rounded-full ${index === currentIndex ? "bg-teal-50" : "bg-[#394648]"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
