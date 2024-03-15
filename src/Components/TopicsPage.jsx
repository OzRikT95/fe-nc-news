import ArticlesList from "./ArticleList";
import TopicsList from "./TopicsList";

function TopicsPage() {
  return (
    <section>
      <div className="list">
        <TopicsList />
      </div>
      <ArticlesList />
    </section>
  );
}

export default TopicsPage;
