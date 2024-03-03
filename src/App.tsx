import { BestDealsContainer } from "./components/BestDealsContainer";
import { Footer } from "./components/Footer";
import { MainMenu } from "./components/MainMenu";
import MobileNavbar from "./components/MobileNavbar";
import { PromoTile } from "./components/PromoTile";
import { SearchFlightsForm } from "./components/SearchFlightsForm";

function App() {
  return (
    <>
      <MainMenu />
      <MobileNavbar />
      <main className="lg:mt-12 mt-24 h-full sm:w-5/6 w-11/12 max-w-screen-xl mx-auto">
        <PromoTile />
        <SearchFlightsForm />
        <BestDealsContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
