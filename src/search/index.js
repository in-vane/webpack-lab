"use strict";

import React from "react";
import ReactDOM from "react-dom";
import test from "./images/test.jpg";
import "../../common";
import "./search.less";

class Search extends React.Component {
  render() {
    return (
      <div className="search-text">
        Search
        <img src={test} alt="test" style={{ height: 80 }} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
