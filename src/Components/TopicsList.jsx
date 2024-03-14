import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

function TopicsList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TopicsList;
