import Blog from "./components/blog";
import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-screen">
      <Nav />
      <Hero />
      <About />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
