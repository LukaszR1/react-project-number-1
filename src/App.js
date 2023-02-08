import Navigation from "./Components/Nav";
import Header from "./Components/Header";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer";
import EmployeeMap from "./Components/Employees/Employees";

function App() {


  return (
    <div className="App">
      <Navigation />
      <Header />
      <EmployeeMap/>
      <Services />
      <Footer />
    </div>
  );
}

export default App;