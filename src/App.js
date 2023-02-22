import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Services from "./components/Offer/BoxContainer";
import Footer from "./components/Footer/Footer";
import Employees from "./components/AboutUs/WorkersContainer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Employees />
      <Services />
      <Footer />
    </>
  );
}

export default App;
