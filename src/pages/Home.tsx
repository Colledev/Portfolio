import { Button } from "../components/ui/button";
import Social from "../components/Social";
import Photo from "../components/Photo";
import { FiDownload } from "react-icons/fi";

const Home = () => {
    const handleDownload = () => {
        window.open(
            "https://drive.google.com/file/d/1N9JZbo51FfVqQQyHhrmlHo6YaQvwhh3M/view?usp=sharing",
            "_blank"
        );
    };

    return (
        <div className="container mx-auto mt-8 pb-1 xl:pb-2 mb-16">
            <div className="flex flex-col xl:flex-row items-center justify-between pt-6 xl:pt-6 xl:pb-24">
                {/* text */}
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <h1 className="text-xl">Fullstack developer</h1>
                    <h2 className="h1">Gabriel Colle</h2>
                    <p className="max-w-[500px] mb-9 text-white/80 mt-4">
                        I'm a full-stack developer with a passion for building
                        beautiful, user-friendly websites and applications.
                    </p>
                    <div className="flex flex-col xl:flex-row items-center gap-8">
                        <Button
                            variant="outline"
                            size="lg"
                            className="uppercase flex items-center gap-2"
                            onClick={handleDownload}
                        >
                            <span>Download CV</span>
                            <FiDownload className="text-xl" />
                        </Button>
                        <div className="mb-8 xl:mb-0">
                            <Social iconStyles="w-14 h-14 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    );
};

export default Home;
