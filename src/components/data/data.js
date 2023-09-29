import OrangeBox from "../../images/OrangeJuice.png";
import StrawBox from "../../images/StrawberryJuice.png";
import LemonBox from "../../images/LemonJuice.png";
import GrapeBox from "../../images/GrapeJuice.png";
import PineapleBox from "../../images/PineapleJuice.png";
import SOBox from "../../images/OrangeStrawJuice.png";
import {
  GiOrangeSlice,
  GiLemon,
  GiStrawberry,
  GiGrapes,
  GiPineapple,
} from "react-icons/gi";

export const JuiceData = [
  {
    id: 1,
    name: "Orange Passion",
    price: 10,
    image: OrangeBox,
    alt: "Orange juice in a box",
    desc: "Sweet juice made from fresh organic oranges.",
    colortheme: "#f7d9c4",
    ingredients: ["orange"],
  },
  {
    id: 2,
    name: "Strawberry Angel",
    price: 12,
    image: StrawBox,
    alt: "Strawberry juice in a box",
    desc: "Sweet juice made from fresh organic strawberries.",
    colortheme: "#f2c6de",
    ingredients: ["strawberry"],
  },
  {
    id: 3,
    name: "Swiss Lemonade",
    price: 15,
    image: LemonBox,
    alt: "Lemonade in a box",
    desc: "Sweet juice made from fresh organic lemons.",
    colortheme: "#c9e4de",
    ingredients: ["lemon", "soda"],
  },
  {
    id: 4,
    name: "Not wine",
    price: 12,
    image: GrapeBox,
    alt: "Grape juice in a box",
    desc: "This is not wine, this is plain grape juice.",
    colortheme: "#dbcdf0",
    ingredients: ["grape"],
  },
  {
    id: 5,
    name: "Mint Pineapple",
    price: 10,
    image: PineapleBox,
    alt: "Pineapple juice in a box",
    desc: "Sweet juice made from fresh imported pineapples.",
    colortheme: "#f5ffc6",
    ingredients: ["pineapple", "mint"],
  },
  {
    id: 6,
    name: "Strawrange",
    price: 15,
    image: SOBox,
    alt: "Straberry orange juice in a box",
    desc: "Mysterious mix of two favorites in one.",
    colortheme: "#f8ad9d",
    ingredients: ["orange", "strawberry"],
  },
];

export const FruitsData = [
  {
    name: "Orange",
    icon: GiOrangeSlice,
    color: "#ff7f00",
  },
  {
    name: "Lemon",
    icon: GiLemon,
    color: "#45e69d",
  },
  {
    name: "Straberry",
    icon: GiStrawberry,
    color: "#ff0073",
  },
  {
    name: "Grape",
    icon: GiGrapes,
    color: "#c300ff",
  },
  {
    name: "Pineapple",
    icon: GiPineapple,
    color: "#b1b741",
  },
];
