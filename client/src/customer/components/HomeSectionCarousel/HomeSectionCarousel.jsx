import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
        <HomeSectionCard key={index} />
    ));

    return (
        <div className="px-4 lg:px-8">
            <div className="relative p-5">
                <AliceCarousel
                    items={items}
                    controlsStrategy="alternate"
                    infinite
                    responsive={responsive}
                    disableDotsControls={true}
                    disableButtonsControls={true}
                />

                {/* Left Button */}
                <Button
                    variant="contained"
                    className="z-50"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "-1.5rem",
                        transform: "translateY(-50%)",
                        bgcolor: "white",
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                    }}
                >
                    <ChevronLeftIcon sx={{ color: "black" }} />
                </Button>

                {/* Right Button */}
                <Button
                    variant="contained"
                    className="z-50"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        right: "-1.5rem",
                        transform: "translateY(-50%)",
                        bgcolor: "white",
                        minWidth: "40px",
                        width: "40px",
                        height: "40px",
                    }}
                >
                    <ChevronRightIcon sx={{ color: "black" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
