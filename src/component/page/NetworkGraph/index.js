import React, { useState } from "react";
import Graph from "react-graph-vis";
import testData from "../../../data.json";
// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";
function NodeGraph() {
  const [graphData, setGraphData] = useState({});
  const getData = () => {
    console.log(testData);
    let edgesData = testData?.links.map((item) => ({
      from: item.source,
      to: item.target,
    }));

    let nodesData = testData?.nodes.map((item, index) => ({
      id: index,
      label: item.name,
      title: item.name,
    }));
    setGraphData({ nodes: nodesData, edges: edgesData });
  };
  React.useEffect(() => {
    getData();
  }, []);

  var options = {
    nodes: {
      shape: "dot",
      size: 16,
    },
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -26,
        centralGravity: 0.005,
        springLength: 230,
        springConstant: 0.18,
      },
      maxVelocity: 146,
      solver: "forceAtlas2Based",
      timestep: 0.35,
      stabilization: { iterations: 150 },
    },
    height: "1000px",
  };
  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log(nodes, edges);
    },
  };
  return (
    Object.keys(graphData).length > 0 && (
      <Graph graph={graphData} options={options} events={events} />
    )
  );
}
export default NodeGraph;
