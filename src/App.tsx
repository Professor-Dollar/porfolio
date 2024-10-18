import FloatingNav from "./components/navigation/FloatingNav";
import Header from "./components/navigation/Header";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
    <Header />
    <main className="h-screen w-full relative">
      <Home/>
      <FloatingNav/>
      <About/>
      <Skills/>
    </main>
    </>
  );
}

export default App;
