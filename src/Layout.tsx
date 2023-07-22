import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/main/Main";
import "./layout.scss";
import NavigationContext from "./contexts/NavigationContext";
import NavigationEffect from "./components/navigation-effects/NavigationEffect";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";
import ContactMe from "./pages/contact-me/ContactMe";
import { useEffect } from "react";

function AppLayout() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationContext>
        <div
          className="App"
          // onScrollCapture={(e) => {
          //   const scrolled = (e.target as HTMLElement).scrollTop;
          //   setScrolled(scrolled);
          // }}
        >
          <NavigationEffect />
          <Navbar />
          <div className="page-view" id="view">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/works" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </NavigationContext>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const view = document.getElementById("view");
    // console.log(view);
    view?.scrollTo(0, 0);
    // console.log("Scrolled to top", view);
  }, [pathname]);

  return null;
}

export default AppLayout;
