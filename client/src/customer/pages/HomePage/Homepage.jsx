import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const Homepage = () => {
    return (
        <>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-3 lg:px-7">
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </>
    );
};

export default Homepage;
