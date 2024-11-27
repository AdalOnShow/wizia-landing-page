const Footer = () => {
    return (
        <section className="px-7 xl:px-0 bg-teal-200">
            <div className="container mx-auto flex flex-col gap-6 md:flex-row justify-between items-center py-10">
                <img src="/footer-logo.svg" alt="Footer Logo" width={72.8} height={16} />
                <p className="font-workSans font-light text-base text-[#96ACAF]">Copyright © {new Date().getFullYear()} Wizia. All rights reserved.</p>
            </div>
        </section>
    )
}
export default Footer
