import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/SignUp" element={<SignUp />} />
          </Route>
          <Route path="/News" element={<News articlesDisplayed={null}  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
