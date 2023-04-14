import "./App.css";
import { useState } from "react";
import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar/index";
import Home from "./pages/Home/index";
import MenuModal from "./components/ui/menu-modal/index";
import ShareModal from "./components/ui/share-modal";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact/index";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleShareToggle = () => {
    setIsShareOpen(!isShareOpen);
  };

  return (
    <div className="App">
      <Navbar onToggleModal={toggleModal} modalOpen={modalOpen} />
      <MenuModal isOpen={modalOpen} toggleModal={toggleModal} />
      <ShareModal
        handleShareToggle={handleShareToggle}
        isShareOpen={isShareOpen}
      />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer handleShareToggle={handleShareToggle} isShareOpen={isShareOpen} />
    </div>
  );
}

export default App;
