import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import NewsLetter from "./components/NewsLetter";
import Premium from "./components/Premium";
import Footer from "./components/Footer";
function App() {
return (
<div>
  <Navbar />
  <Hero />
  <Resources />
  <NewsLetter />
  <Premium />
  <Footer/>
</div>

);
}

export default App;