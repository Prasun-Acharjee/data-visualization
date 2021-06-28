import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CSVReader from "react-csv-reader";
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, ""),
};

export default class ScatterPlotDynamic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [], xaxis: "", yaxis: "" };
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>Scatter Chart</h1>
        <ResponsiveContainer width="99%" aspect={3}>
          <ScatterChart
            height={500}
            margin={{
              top: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey={this.state.xaxis} name={this.state.xaxis} />
            <YAxis dataKey={this.state.yaxis} name={this.state.yaxis} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.state.data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            this.setState(
              {
                data: data.reverse().filter((item, index) => index < 20),
              },
              () => console.log(this.state.data, data, fileInfo)
            )
          }
          inputStyle={{ marginTop: 10 }}
          parserOptions={papaparseOptions}
        />
        {this.state.data?.length > 0 && (
          <div
            style={{
              margin: 20,
              display: "flex",
              flexDirection: "column",
              width: "fit-content",
            }}
          >
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Select X Axis
            </label>
            <select
              defaultChecked
              placeholder="select x axis"
              defaultValue={Object.keys(this?.state?.data[0])[0]}
              onChange={(e) =>
                this.setState(
                  {
                    xaxis: e.target.value,
                    data: this.state.data.sort(function (a, b) {
                      return a[e.target.value] - b[e.target.value];
                    }),
                  },
                  () => console.log(this.state)
                )
              }
            >
              {Object.keys(this.state.data[0])?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Select Y Axis
            </label>
            <select
              defaultChecked
              placeholder="select y axis"
              defaultValue={Object.keys(this?.state?.data[0])[1]}
              onChange={(e) =>
                this.setState(
                  {
                    yaxis: e.target.value,
                    data: this.state.data.sort(function (a, b) {
                      return a[e.target.value] - b[e.target.value];
                    }),
                  },
                  () => {
                    console.log(this.state);
                  }
                )
              }
            >
              {Object.keys(this.state.data[0])?.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
}
