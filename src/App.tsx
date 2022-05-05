import About from "./components/About";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <main className="bg-gradient-to-b from-cyan-500 to-blue-500 min-h-screen">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Links />
    </main>
  )
}

export default App
