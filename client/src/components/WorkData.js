import gofundme from "../assets/gofundme.png"
import calculator from "../assets/calculator.png"
import RealEstate from "../assets/RealEstate.png"



const projectCardData = [
    {
        imgsrc: gofundme,
        title: 'CrowdFund Website',
        text: "In this project I used useState and data from a JSON file to dynamically render data onto a web page with this go fund me clone.",
        view: "",
        source: ""
    },
       {
        imgsrc: RealEstate,
        title: 'Real Estate Website',
        text: "In this project I made a clone of a Real estate website were I used framer motion, swiper, accordion, and count up librarys to make this app functional.",
        view: "",
        source: ""
    },

    {
        imgsrc: calculator,
        title: 'Fully Functional Calculator',
        text: "In this project I designed a fully functional calculator using useEffect, a switch statement, and useState opened up into an object with key value pairs.",
        view: "https://bkwilliamsmerncode.github.io/Calculator",
        source: "https://github.com/bkwilliamsmerncode/Calculator"
    }
];

export default projectCardData;