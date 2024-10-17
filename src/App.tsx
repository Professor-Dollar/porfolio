import FloatingNav from "./components/navigation/FloatingNav";
import Header from "./components/navigation/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { useState } from "react";

function App() {
  return (
    <>
    <Header />
    <main className="h-screen w-full relative">
      <Home/>
      <FloatingNav/>
      <About/>
    </main>
    </>
  );
}

export default App;
