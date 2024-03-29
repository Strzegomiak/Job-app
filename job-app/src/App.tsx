import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleJob from "./Pages/SingleJob";
import { WishListProvider } from "./context/WishListContext";
import { FavoritesFlagProvider } from "./context/FavoritesFlagContex";
import Application from "./Pages/Application";
import { InputSortProvider } from "./context/InputSortContext";
import Stat from "./Pages/Stat";

function App() {
  return (
    <div>
      <InputSortProvider>
        <FavoritesFlagProvider>
          <WishListProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/offer/:id" element={<SingleJob />} />
                <Route path="/application" element={<Application />} />
                <Route path="/stats" element={<Stat />} />
              </Routes>
            </BrowserRouter>
          </WishListProvider>
        </FavoritesFlagProvider>
      </InputSortProvider>
    </div>
  );
}

export default App;
