import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Title } from "../styledCart";

export default function ThankYou() {
    return(
        <div className="baseLayout">
            <Header returnPage path="/"/>
            <Title>
                <h1>Thank you for your purchase!</h1>
            </Title>
            <Footer />
        </div>
    )
}