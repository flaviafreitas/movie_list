import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from './pages/home/Home.jsx';
import MovieDetail from "./pages/movieDetail/MovieDetail.jsx";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App" style={{ backgroundColor: "#303030" }}>
      <Header onSubmit={(inputValue) => setSearchValue(inputValue)} />
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;