import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticlePage from "./Components/ArticlePage";
// import TopicsPage from "./Components/TopicsPage";
// import UserProfilePage from "./Components/UserProfilePage";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
