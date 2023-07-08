import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/main/Main";
import "./layout.scss";
import NavigationContext from "./contexts/NavigationContext";
import NavigationEffect from "./components/navigation-effects/NavigationEffect";
import Footer from "./components/footer/Footer";
function AppLayout() {
  return (
    <BrowserRouter>
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
            </Routes>
            <Footer />
          </div>
        </div>
      </NavigationContext>
    </BrowserRouter>
  );
}

export default AppLayout;
