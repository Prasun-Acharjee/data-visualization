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
} from "recharts";
import { barChartData } from "../../../constants";

export default class Barchart extends PureComponent {
  render() {
    return (
      <div style={{ marginLeft: 30 }}>
        <h1>Bar Chart</h1>
        <BarChart
          width={1000}
          height={800}
          data={barChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2013" fill="#8884d8" />
          <Bar dataKey="2016" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  }
}
