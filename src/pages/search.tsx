import { getApiRoot } from "@/common/api/api";

const Search = ({ lectures, total, searchValue }) => {
  return (
    <div>
      {lectures.map((item, key) => (
        <p key={key}>{item.lecture_id}</p>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const searchValue = context.query["search"];
  const res = await getApiRoot().get(`/search/lectures?search=${searchValue}`);
  const { results, count } = await res.data;
  return {
    props: { lectures: results, total: count, searchValue: searchValue },
  };
}

export default Search;
