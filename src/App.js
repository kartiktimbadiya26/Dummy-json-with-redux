import './App.css';
import { Routes, Route } from "react-router-dom";
import Mainbody from './Component/Mainbody';
import Secondbody from './Component/Secondbody';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Cart from './Component/Cart';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/:id" element={<Secondbody />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
