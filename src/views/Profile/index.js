import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Page, Body, InfoGroup, GroupBttn } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const clientData = {
    name: "Ardbert Dark",
    email: "ardbert.dark@gmail.com",
    address: "123 Main St, Crystarium",
    payment: "Cash",
  };
  const navigate = useNavigate();
  const handleEditPay = () => {
    navigate("/editpayment");
  };

  return (
    <Page>
      <Header title="Profile" returnPage />
      <Body>
        <h1>{clientData.name}</h1>
        <InfoGroup>
          <b>Email</b>
          <p>{clientData.email}</p>
        </InfoGroup>
        <InfoGroup>
          <p>{clientData.address}</p>
        </InfoGroup>
        <InfoGroup>
          <b>Preferred Payment</b>
          <p>{clientData.payment}</p>
        </InfoGroup>
        <GroupBttn>
          <button className="button">Edit Profile</button>
          <button className="button" onClick={handleEditPay}>Edit Payment Options</button>
        </GroupBttn>
      </Body>
      <Footer />
    </Page>
  );
}
