import "underscore";
import "dygraphs";

import React from "react";
import CallsTracer from "./call_tracer.jsx";
import Utils from "./utils.js";

const UPDATE_INTERVAL = 1000;
// 10 minutes.
const MAX_DPS = 5 * 60;

export default class GraphDyso extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const container = document.getElementById("graph");
    const g = new Dygraph(container,
      `Date,A,B
      2016/01/01,10,20
      2016/07/01,20,10
      2016/12/31,40,30
      `, {
        fillGraph: true
      });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Dysograph</h3>
        </div>
        <div className="panel-body">
          <div id="graph"></div>
        </div>
      </div>
    );
  }

  buildGraph() {
  }

  updateGraph() {
  }
}