import About from "./components/About";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <main className="bg-white">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Links />
    </main>
  )
}

export default App
