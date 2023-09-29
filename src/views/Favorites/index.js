import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MiniCard from "../../components/MiniCard";
import { JuiceData } from "../../components/data/data";
import { Page, PageBody, CardGrid } from "./styles";

export default function Favorites() {
  return (
    <Page>
      <Header returnPage title="Hearty"/>
      <PageBody>
        <h2>Your favorite drinks</h2>
        <CardGrid>
          <MiniCard data={JuiceData[1]} deleteX/>
          <MiniCard data={JuiceData[5]} deleteX/>
          <MiniCard data={JuiceData[3]} deleteX/>
          <MiniCard data={JuiceData[4]} deleteX/>
        </CardGrid>
      </PageBody>
      <Footer />
    </Page>
  );
}
