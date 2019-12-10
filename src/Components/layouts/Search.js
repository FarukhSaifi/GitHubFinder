import React, { useState, useContext } from "react";
import GithubContext from "../context/githubContext";

const Search = ({ showClear, ClearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [search, setText] = useState("");

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search === "") {
    } else {
      githubContext.SearchUser(search);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group row">
          <div className="col-sm-10">
            <input
              name="search"
              type="text"
              className="form-control form-control-lg"
              placeholder="Search Here..."
              onChange={onChange}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </div>
      </form>
      {showClear && (
        <button
          type="button"
          class="btn btn-secondary col-12 "
          onClick={ClearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
