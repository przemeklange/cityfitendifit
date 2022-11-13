import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import FirstPerson from "./pages/Meta/FirstPerson";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="adamkowalski" element={<FirstPerson />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
