import React, { Fragment } from "react";
import Dashboard from "./Dashboard";
import Search from "./Search";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Dashboard />
    </Fragment>
  );
};
export default Home;
