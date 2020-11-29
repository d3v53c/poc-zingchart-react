import React, { Component } from "react";
import ZingChart from "zingchart-react";
import "zingchart/es6";
// EXPLICITLY IMPORT MODULE
import "zingchart/modules-es6/zingchart-maps.min.js";
import "zingchart/modules-es6/zingchart-maps-usa.min.js";

class ModuleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        shapes: [
          {
            type: "zingchart.maps",
            options: {
              name: "usa",
              ignore: ["AK", "HI"]
            }
          }
        ]
      }
    };
    this.chart = React.createRef();
  }
  render() {
    return (
      <div>
        <ZingChart ref={this.chart} data={this.state.config} />
      </div>
    );
  }
}

export default ModuleChart;
