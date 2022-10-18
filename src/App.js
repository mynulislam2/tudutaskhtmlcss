import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Account from "./Pages/Account/Account";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myAccount" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
