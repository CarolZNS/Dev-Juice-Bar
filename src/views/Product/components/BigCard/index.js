import { CardContainer, TopPart, BottomInfo, PriceTag } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JuiceData } from "../../../../components/data/data";

export default function BigCard() {
  let { id } = useParams();

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [singleJuice, setSingleJuice] = useState({});

  useEffect(() => {
    setLoading(true);
    let productId = id - 1;
    setSingleJuice(JuiceData[productId]);
    setLoading(false);
  }, [id]);

if(loading){
  return(
    <h1>Loading...</h1>
  )
}
  return (
    <CardContainer>
      <TopPart>
        <img src={singleJuice.image} alt="Juice box" />
      </TopPart>
      <BottomInfo>
        <h2>{singleJuice.name}</h2>
        <div className="ingredients">
          {singleJuice.ingredients && singleJuice.ingredients.map((ingredient)=>(
            <span key={ingredient}>{ingredient}</span>
          ))}
        </div>
        <p className="desc">{singleJuice.desc}</p>
        <PriceTag>
          <p>R${singleJuice.price},00</p>
          <div className="quantity">
            <button
              className="decrese"
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              -
            </button>
            <input
              type="number"
              min={0}
              max={40}
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className="increse"
              onClick={() => setCount(count + 1)}
              disabled={count === 40}
            >
              +
            </button>
          </div>
        </PriceTag>
      </BottomInfo>
    </CardContainer>
  );
}
