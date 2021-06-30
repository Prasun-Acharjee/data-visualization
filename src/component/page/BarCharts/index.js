import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { barChartData } from "../../../constants";
import CSVReader from "react-csv-reader";
const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, ""),
};

export default class Barchart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [], xaxis: "", yaxis: "" };
  }
  render() {
    return (
      <div style={{ marginLeft: 30, height: "100vh", width: "100vw" }}>
        <h1>Bar Chart</h1>
        <ResponsiveContainer width="99%" aspect={3}>
          <BarChart
            width={1000}
            height={800}
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={this.state.xaxis} />
            <YAxis dataKey={this.state.yaxis} />
            <Tooltip />
            <Legend />
            <Bar dataKey={this.state.yaxis} fill="#8884d8" />
            {/* <Bar dataKey="2016" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>

        <CSVReader
          onFileLoaded={(data, fileInfo) =>
            this.setState(
              {
                data: data.reverse().filter((item, index) => index < 50),
              },
              () => console.log(data, fileInfo)
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
