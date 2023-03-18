import { StyledApp, ProductHeader, StyledProduct, BuyNow } from "./styles";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import BigCard from "./components/BigCard";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate("/");
  };

  return (
    <StyledApp>
      <ProductHeader>
        <HiOutlineChevronDoubleLeft onClick={handleReturnClick}/>
        <BsHeart />
      </ProductHeader>
      <StyledProduct>
        <BigCard />
      </StyledProduct>
      <BuyNow>Buy now</BuyNow>
    </StyledApp>
  );
};

export default Product;
