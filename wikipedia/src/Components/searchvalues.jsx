
const searchvalues = ({ item }) => {
  return (
    <div className="searchvalues">
      <label htmlFor="">Search</label>
      <div className="search">
        <h1>{item.pageId}</h1>
        <h3>{item.title}</h3>
        <p>{item.snippet}</p>
      </div>
    </div>
  );
};

export default searchvalues;
