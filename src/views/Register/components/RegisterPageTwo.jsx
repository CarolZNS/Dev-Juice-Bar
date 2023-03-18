import { Expirecvv } from "../../../components/CreditCardForm/styles";
import FormControl from "../../../components/FormControl";

export default function RegisterPageTwo() {
  return (
    <>
      <FormControl
        id="address"
        label="Address"
        placeholder="Your full address"
      />
      <FormControl
        id="number"
        label="Number/Complement"
        placeholder="Apt/Suite nº"
      />
      <Expirecvv>
        <FormControl id="city" label="City" placeholder="Lakeland" />
        <FormControl id="state" label="State" placeholder="Noverdant" />
      </Expirecvv>
      <FormControl id="zipcode" label="Zip Code" placeholder="Numbers only" />
    </>
  );
}
