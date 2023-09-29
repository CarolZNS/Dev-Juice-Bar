import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Page,
  Body,
  StyledLink,
  Button
} from "./styles";

export default function Profile() {
  return (
    <Page>
      <Header title="Configurations" />
      <Body>
    <StyledLink>edit profile</StyledLink>
    <StyledLink to='/editpayment'>manage payment method</StyledLink>
    <Button>logout</Button>
      </Body>
      <Footer />
    </Page>
  );
}
