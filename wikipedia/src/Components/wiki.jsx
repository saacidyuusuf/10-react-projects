import { useState, useEffect } from "react";
import image1 from "../assets/wiki.jpg";
import Searchvalues from "./searchvalues";

let url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=10&format=json&origin=*&srsearch";

const Wiki = () => {
  const [value, setvalue] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetched() {
    if (searchQuery.trim() !== "") {
      let response = await fetch(`${url}&srsearch=${searchQuery}`);
      let data = await response.json();
      let result = data.query.search;
      setvalue(result);
      console.log(result);
    } else {
      setvalue([]);
    }
  }

  /* useEffect(() => {
    fetched();
    //marwalbo searchquery is badalo wac
    //fetched function
  }, [searchQuery]);
   */
  return (
    <>
      <div className="wiki">
        <img src={image1} alt="" />
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetched}>Submit</button>
      </div>
      <div className="container">
        {value?.length > 0 ? (
          <div className="">
            {value.map((item) => {
              return <Searchvalues key={item.title} item={item} />;
            })}
          </div>
        ) : (
          <h2 className="noResult">No results found!</h2>
        )}
      </div>
    </>
  );
};

export default Wiki;

/* 
note:
- The fetchData function is modified to use the
 searchQuery as the search term in the API request.
- The useEffect hook is updated to trigger
 the fetchData function whenever the searchQuery changes.
- The input field's value is set to 
searchQuery, and the onChange event 
updates the searchQuery state.


The trim() method is used to remove any leading or trailing
 whitespace from the string. By calling searchQuery.trim(),
  it ensures that any whitespace entered by 
  the user before or after the actual search 
query is ignored.


*/
