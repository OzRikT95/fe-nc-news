import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticleList from "./Components/ArticleList";
import ArticlePage from "./Components/ArticlePage";
import TopicsPage from "./Components/TopicsPage";
// import UserProfilePage from "./Components/UserProfilePage";
import TopicsCard from "./Components/TopicsCard";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicSlug" element={<TopicsCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
