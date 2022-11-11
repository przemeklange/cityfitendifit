import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="kontakt" element={<Contact />} />
          <Route path="omnie" element={<Contact />} />
          <Route path="wspolpraca" element={<Contact />} />
          <Route path="metamorfozy" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
export default App;
