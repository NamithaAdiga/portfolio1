import About from "./About";
import "./App.css";
import Home from "./Home";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Services />
       <Skills />
       <Contact />
    </div>
  );
}

export default App;