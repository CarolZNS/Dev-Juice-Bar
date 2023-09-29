import { Card, Ingredients } from "./styles";
import FruitIcon from "../FruitIcon";

export default function RecipeCard() {
  const mockFruit = [
    {
      name: "Orange",
      color: "#ff7f00",
    },
    {
      name: "Lemon",
      color: "#45e69d",
    },
  ];

  return (
    <Card>
      <b>Title</b>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus!
      </p>
      <Ingredients>
        <FruitIcon data={mockFruit[0]} smallText widerPadding/>
        <FruitIcon data={mockFruit[1]} smallText widerPadding/>
      </Ingredients>
    </Card>
  );
}
