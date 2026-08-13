import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation.tsx";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Music from "./pages/Music.tsx";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="border-b border-neutral-800 bg-neutral-900">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
