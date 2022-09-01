import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import NewIndividual from "./Components/News/News-Individual/News-Individual";
import { useState } from "react";
function App() {
  const [articleIndex, setArticleIndex] = useState()
  const getIndex= (indexNumber) =>{
    console.log(indexNumber)
    setArticleIndex(indexNumber);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home  getIndex={getIndex} />} />
          <Route element={<Layout />}>
            <Route path="/NewsIndividual" element={<NewIndividual articlesIndex={articleIndex} />} />
          </Route>
           <Route element={<Layout />}>
          <Route path="/News" element={<News articlesDisplayed={null} getIndex={getIndex} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
