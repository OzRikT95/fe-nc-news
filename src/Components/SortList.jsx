import { useNavigate } from "react-router-dom";

function SortList({ setSortBy, setOrder, sortBy, order }) {
  const navigate = useNavigate();
  return (
    <div>
      <select
        onChange={(event) => {
          navigate(`/articles?sort_by=${event.target.value}&order=${order}`);
        }}
      >
        <option value="votes">Votes</option>
        <option value="comment_count">Comment Count</option>
        <option value="created_at">Date</option>
      </select>
      <button
        onClick={() => {
          navigate(
            `/articles?sort_by=${sortBy}&order=${
              order === "desc" ? "asc" : "desc"
            }`
          );
        }}
      >
        Toggle Order
      </button>
    </div>
  );
}

export default SortList;
