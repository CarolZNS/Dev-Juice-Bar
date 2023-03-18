import MiniCard from "../../../../components/MiniCard";
import { ProductContainer, CardGrid } from "./styles";
import { JuiceData } from "../../../../components/data/data";

export default function Products(props) {
  console.log(props)
  return (
    <ProductContainer>
      <h3>List of drinks</h3>
      <CardGrid>
        {JuiceData.map((juice) => (
          <MiniCard data={juice} key={juice.id} onClick={props.onClick} />
        ))}
      </CardGrid>
    </ProductContainer>
  );
}
