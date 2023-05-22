import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { Toaster } from "react-hot-toast";
import { useState,useEffect } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth/window.innerHeight);
   useEffect(() => {
    const resizeRatio = ()=>{
        setRatio(window.innerWidth/window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);
    return ()=>{
      window.removeEventListener('resize', resizeRatio);
    };
  },[ratio]);
  return ratio<2 ? (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Home ratio={ratio}/>
    <Skills/>
    <Work/>
    <TimeLine/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  ): <em id="customMessage">Please Change the ratio to view!</em>
}
let anchor = document.querySelectorAll("a");
let mouse = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
anchor.forEach((link) => {
  link.addEventListener("mouseover", () => {
    mouse.classList.add(".grow");
  });
});
export default App;