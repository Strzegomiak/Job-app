import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleJob from "./Pages/SingleJob";
import { WishListProvider } from "./context/WishListContext";

function App() {
  return (
    <div className="flex justify-center items-center flex-col mr-36 ml-36 ">
      <WishListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/offer/:id" element={<SingleJob />} />
          </Routes>
        </BrowserRouter>
      </WishListProvider>
    </div>
  );
}

export default App;
