import { GrOverview } from "react-icons/gr";
import { GiWavyItinerary } from "react-icons/gi";
import { CiMap, CiCalendarDate, CiShare2 } from "react-icons/ci";
import { GoTag } from "react-icons/go";
import { FaQuestionCircle, FaRegThumbsUp } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const packageNavs = [
    {
        id: 1,
        title: "Overview",
        link: "#overview",
        icon: GrOverview,
    },
    {
        id: 2,
        title: "Itinerary",
        link: "#itinerary",
        icon: GiWavyItinerary,
    },
    {
        id: 3,
        title: "Trip Map",
        link: "#map",
        icon: CiMap,
    },
    {
        id: 4,
        title: "Inclusions",
        link: "#inclusions",
        icon: GoTag,
    },
    {
        id: 5,
        title: "Departure Dates",
        link: "#dates",
        icon: CiCalendarDate,
    },
    {
        id: 6,
        title: "Essentials Info",
        link: "#info",
        icon: FaCircleInfo,
    },
    {
        id: 7,
        title: "FAQs",
        link: "#faqs",
        icon: FaQuestionCircle,
    },
    {
        id: 8,
        title: "Client Reviews",
        link: "#reviews",
        icon: FaRegThumbsUp,
    },
];

export default packageNavs;
