import Blog from "./components/blog";
import About from "./components/about";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { createPortal } from "react-dom";
import MobileList from "./components/mobileList";
import { useState } from "react";

function App() {
  const [mobileStatue, setMobileStatue] = useState(false);

  return (
    <>
      {mobileStatue &&
        createPortal(
          <MobileList
            setMobileStatue={setMobileStatue}
            mobileStatue={mobileStatue}
          />,
          document.body
        )}
      <div className="w-screen flex flex-col items-center relative mx-auto overflow-x-hidden max-w-screen-2xl">
        <Nav setMobileStatue={setMobileStatue} mobileStatue={mobileStatue} />
        <Hero />
        <About />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
