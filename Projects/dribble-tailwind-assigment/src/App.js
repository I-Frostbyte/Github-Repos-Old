import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Footer />
    </div>
  );
}

export default App;
