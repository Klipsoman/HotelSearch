import React from "react";
import Content from "./Content/Content";
import Header from "./Header";
import Favourites from "./Sidebar/Favourites/Favourites";
import Search from "./Sidebar/Search/Search";
import Sidebar from "./Sidebar/Sidebar";

export default function Main() {
  return (
    <div className="page">
      <Header />
      <div className="container">
        <div className="main">
          <Sidebar>
            <Search />
            <Favourites />
          </Sidebar>
          <Content />
        </div>
      </div>
    </div>
  );
}
