import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Popular from "./components/Popular/Popular";
import Recommend from "./components/Recommend/Recommend";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#eeeff0] open-sans">
      <Nav />
      <Banner />
      <section>
        <Popular />
        <Recommend />
      </section>
      <Footer />
    </div>
  );
}

export default App;
