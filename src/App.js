import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/components";
import { About, Collections, Contact, Home, Shop, Error } from "./routes/routes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<Error />} />

      </Route>
    </Routes>
  );
}

export default App;
