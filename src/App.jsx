import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticleList from "./Components/ArticleList";
import ArticlePage from "./Components/ArticlePage";
import TopicsPage from "./Components/TopicsPage";
// import UserProfilePage from "./Components/UserProfilePage";
import TopicsCard from "./Components/TopicsCard";
import NotFound from "./Components/404Page";
import "./app.css";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:articleId" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicSlug" element={<TopicsCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
