import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
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

export default class Areachart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [], xaxis: "", yaxis: "" };
  }
  render() {
    return (
      <div style={{ marginLeft: "30px", height: "100vh", width: "100vw" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>Area Chart </h1>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: 20 }}
          >
            <span style={{ marginRight: 10 }}>
              Choose a CSV file to visulize data
            </span>
            <CSVReader
              onFileLoaded={(data, fileInfo) =>
                this.setState(
                  {
                    data: data.reverse().filter((item, index) => index < 50),
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
                  display: "flex",
                  marginRight: 20,
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
                <label
                  style={{ marginRight: 10, marginTop: 10, marginLeft: 10 }}
                >
                  Select Y Axis
                </label>
                <select
                  placeholder="select y axis"
                  defaultValue={Object.keys(this?.state?.data[0])[1]}
                  onChange={(e) =>
                    this.setState({ yaxis: e.target.value }, () => {
                      console.log(this.state);
                    })
                  }
                >
                  {Object.keys(this.state.data[0])?.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        <ResponsiveContainer width="99%" aspect={3}>
          <AreaChart
            width={"100%"}
            height={500}
            data={this.state.data}
            margin={{
              top: 10,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={this.state.xaxis} />
            <YAxis dataKey={this.state.yaxis} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={this.state.yaxis}
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
