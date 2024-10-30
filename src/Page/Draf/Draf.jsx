import React from "react";
import { Header } from "../../Components/Header";
import { Experience } from "../../Components/Experience";
import { Skills } from "../../Components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Header />
        <main>
          <Experience />
          <Skills />
        </main>
      </div>
    </div>
  );
}

export default App;
