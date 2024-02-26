import { BestDealsContainer } from "./components/BestDealsContainer";
import { Footer } from "./components/Footer";
import { MainMenu } from "./components/MainMenu";
import { PromoTile } from "./components/PromoTile";
import { SearchFlightsForm } from "./components/SearchFlightsForm";

function App() {
  return (
    <>
      <MainMenu />
      <main className="mt-12 h-full sm:w-5/6 w-11/12 max-w-screen-2xl mx-auto">
        <PromoTile />
        <SearchFlightsForm />
        <BestDealsContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
