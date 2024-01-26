import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleJob from "./Pages/SingleJob";
import { WishListProvider } from "./context/WishListContext";
import { FavoritesFlagProvider } from "./context/FavoritesFlagContex";

function App() {
  return (
    <div className="flex justify-center items-center flex-col mr-36 ml-36 ">
      <FavoritesFlagProvider>
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
      </FavoritesFlagProvider>
    </div>
  );
}

export default App;
