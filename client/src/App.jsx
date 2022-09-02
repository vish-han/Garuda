import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Organizer from "./pages/Organizer";
import styles from "./style";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="bg-primary">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="org" element={<Organizer />} />
      </Routes>
    </div>
  );
};

export default App;
