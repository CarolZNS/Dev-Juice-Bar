import * as CSS from "./styles";
import { useState } from "react";

export default function MiniCard(props) {
  const [count, setCount] = useState(props.data.qtd);

  return (
    <CSS.CardContainer bgColor={props.data.colortheme} onClick={props.onClick}>
      <img src={props.data.image} alt={`{props.data.name} boxed juice`} />
      <CSS.ItemInfo>
        <p>{props.data.name}</p>
        <CSS.PriceQtd>
          <p>R${props.data.price},00</p>
          <CSS.QtdTrash>
            <CSS.InputContainer>
              <button
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
              >
                -
              </button>
              <input value={count} onChange={(e) => setCount(e.target.value)} />
              <button
                className="increse"
                onClick={() => setCount(count + 1)}
                disabled={count === 40}
              >
                +
              </button>
            </CSS.InputContainer>
            <CSS.Trash />
          </CSS.QtdTrash>
        </CSS.PriceQtd>
      </CSS.ItemInfo>
    </CSS.CardContainer>
  );
}
