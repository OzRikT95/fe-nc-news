import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ArticlePage from "./Components/ArticlePage";
import TopicsPage from "./Components/TopicsPage";
// import UserProfilePage from "./Components/UserProfilePage";
import ArticlesByTopic from "./Components/TopicsCard";
import TopicsList from "./Components/TopicsList";
import TopicsCard from "./Components/TopicsCard"

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
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topicSlug" element={<TopicsCard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
