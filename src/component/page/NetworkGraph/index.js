import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";
import CSVReader from "react-csv-reader";
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, ""),
};

function NodeGraph() {
  const [edges, setEdges] = useState([]);
  const [nodes, setNodes] = useState([]);

  var options = {
    nodes: {
      shape: "dot",
      size: 2,
    },
    configure: {
      enabled: false,
      filter: "nodes,edges",
      container: undefined,
      showButton: true,
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
      stabilization: { iterations: 1500 },
    },

    height: "1000px",
    width: "1920px",
  };
  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log(nodes, edges);
    },
  };

  useEffect(() => {
    setNodes([]);
    setEdges([]);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <CSVReader
          label={
            <p style={{ marginRight: 10, fontWeight: "bold" }}>
              Enter nodes via CSV file
            </p>
          }
          onFileLoaded={(data, fileInfo) => {
            console.log(data);
            let nodesData = data.map((item, index) => ({
              id: item.id,
              label: item.label,
              title: item.label,
            }));
            setNodes([]);
            setNodes(nodesData.filter((item, index) => index < 200));
            // console.log(nodesData);
          }}
          inputStyle={{ marginTop: 10 }}
          parserOptions={papaparseOptions}
        />
        <CSVReader
          label={
            <p style={{ marginRight: 10, fontWeight: "bold" }}>
              Enter edges via CSV file
            </p>
          }
          onFileLoaded={(data, fileInfo) => {
            let edgesData = data.map((item) => ({
              from: item.source,
              to: item.target,
            }));
            setEdges([]);
            setEdges(edgesData.filter((item, index) => index < 500));

            console.log(edgesData);
          }}
          inputStyle={{ marginTop: 10 }}
          parserOptions={papaparseOptions}
        />
      </div>

      {edges.length > 0 && (
        <Graph graph={{ nodes, edges }} options={options} events={events} />
      )}
    </div>
  );
}
export default NodeGraph;
