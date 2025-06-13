import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skill";
import Projects from "./components/project";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center gap-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
