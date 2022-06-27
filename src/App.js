import "./App.css";
import Header from "./components/header/header.jsx";
import Experience from "./components/experince/experince.jsx";
import Testimonials from "./components/testimonials/testimonials.jsx";
import Navigation from "./components/navigation/navigation";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Services from "./components/services/services.jsx";
import Footer from "./components/footer/footer.jsx";
import Portfolio from "./components/portfolio/portfolio.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <About />
      <Experience></Experience>
      {/* <Testimonials></Testimonials> */}
      <Services></Services>
      {/* <Portfolio></Portfolio> */}
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
