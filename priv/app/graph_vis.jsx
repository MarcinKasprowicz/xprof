import "underscore";
import "vis";
import React from "react";
import CallsTracer from "./call_tracer.jsx";
import Utils from "./utils.js";

const UPDATE_INTERVAL = 1000;
// 10 minutes.
const MAX_DPS = 5 * 60;

export default class GraphVis extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.dataset;
    // this.graph2d;
  }

  // componentDidMount() {
  //   var container = document.getElementById('visualization');
  //   var items = [
  //     {x: '2014-06-11', y: 10},
  //     {x: '2014-06-12', y: 25},
  //     {x: '2014-06-13', y: 30},
  //     {x: '2014-06-14', y: 10},
  //     {x: '2014-06-15', y: 15},
  //     {x: '2014-06-16', y: 30}
  //   ];
  //   var dataset = new vis.DataSet(items);
  //   var options = {
  //     start: '2014-06-10',
  //     end: '2014-06-18'
  //   };
  //   var graph2d = new vis.Graph2d(container, dataset, options);
  // }

  render() {
    return (
      <div className="visualisation">
      </div>
    );
  }

  // buildGraph() {
  //   const groups = new vis.DataSet();
  //   const columns = [ "x" ];
  //   columns.forEach((column, index) => {
  //     groups.add({
  //       id: index,
  //       content: column,
  //       options: {
  //         drawPoints: { style: "circle" } }
  //     });
  //   });
  //   const container = document.getElementsByClassName("visualisation")[0];
  //   this.dataset = new vis.DataSet();
  //   const options = {
  //     graphHeight: "200px",
  //     start: vis.moment().add(-60, "seconds"),
  //     end: vis.moment()
  //   };
  //   this.graph2d = new vis.Graph2d(container, this.dataset, groups, options);
  // }

  // updateGraph() {
  //   const now = vis.moment();
  //   const range = this.graph2d.getWindow();
  //   const interval = range.end - range.start;
  //   this.graph2d.setWindow(now - interval, now, { animation: false });

  //   this.dataset.add({
  //     x: now,
  //     y: this.y(now / 1000),
  //     group: 0,
  //   });

    // var oldIds = dataset.getIds({
    //   filter: function(item) {
    //     return item.x < range.start - interval;
    //   }
    // });
    // dataset.remove(oldIds);
  //   setTimeout(this.updateGraph.bind(this), UPDATE_INTERVAL);
  // }

  // y(x) {
  //   return (Math.sin(x / 2) + Math.cos(x / 4)) * 5;
  // }
}