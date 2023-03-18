import FruitIcon from "../FruitIcon";
import { Nav } from "./style";
import { FruitsData } from "../data/data";

export default function NavFruit({iconDisplay}) {
  return (
    <Nav>
      {FruitsData.map((fruit) => (
        <FruitIcon key={fruit.name} data={fruit} iconDisplay={iconDisplay? true : false}/>
      ))}
    </Nav>
  );
}
