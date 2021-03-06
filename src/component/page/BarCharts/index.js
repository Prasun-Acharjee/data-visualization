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

const data = [
  {
    id: 1,
    country: "Australia",
    2013: 18.1,
    2014: 18.7,
    2015: 18.8,
    2016: 19.1,
  },
  {
    id: 2,
    country: "Austria",
    2013: 27.6,
    2014: 27.9,
    2015: 28,
    2016: 27.8,
  },
  {
    id: 3,
    country: "Belgium",
    2013: 29.3,
    2014: 29.2,
    2015: 29.2,
    2016: 29.0,
  },
  {
    id: 4,
    country: "Canada",
    2013: 16.9,
    2014: 16.8,
    2015: 17.2,
    2016: null,
  },
  {
    id: 5,
    country: "Chile",
    2013: 10,
    2014: 10.5,
    2015: 11.2,
    2016: null,
  },
  {
    id: 6,
    country: "Czech Republic",
    2013: 20.3,
    2014: 19.9,
    2015: 19.5,
    2016: 19.4,
  },
  {
    id: 7,
    country: "Denmark",
    2013: 29,
    2014: 29,
    2015: 28.8,
    2016: 28.7,
  },
  {
    id: 8,
    country: "Estonia",
    2013: 15.9,
    2014: 16,
    2015: 17,
    2016: 17.4,
  },
  {
    id: 9,
    country: "Finland",
    2013: 29.5,
    2014: 30.2,
    2015: 30.6,
    2016: 30.8,
  },
  {
    id: 10,
    country: "France",
    2013: 31.5,
    2014: 31.9,
    2015: 31.7,
    2016: 31.5,
  },
  {
    id: 11,
    country: "Germany",
    2013: 24.8,
    2014: 24.9,
    2015: 25,
    2016: 25.3,
  },
  {
    id: 12,
    country: "Greece",
    2013: 26,
    2014: 26.1,
    2015: 26.4,
    2016: 27,
  },
  {
    id: 13,
    country: "Hungary",
    2013: 22.1,
    2014: 21.4,
    2015: 20.7,
    2016: 20.6,
  },
  {
    id: 14,
    country: "Iceland",
    2013: 16.6,
    2014: 16.7,
    2015: 15.7,
    2016: 15.2,
  },
  {
    id: 15,
    country: "Ireland",
    2013: 20.2,
    2014: 19.2,
    2015: 17,
    2016: 16.1,
  },
  {
    id: 16,
    country: "Israel",
    2013: 16.1,
    2014: 16.2,
    2015: 16,
    2016: 16.1,
  },
  {
    id: 17,
    country: "Italy",
    2013: 28.6,
    2014: 29,
    2015: 28.9,
    2016: 28.9,
  },
  {
    id: 18,
    country: "Japan",
    2013: 23.1,
    2014: null,
    2015: null,
    2016: null,
  },
  {
    id: 19,
    country: "Korea",
    2013: 9.3,
    2014: 9.7,
    2015: 10.1,
    2016: 10.4,
  },
  {
    id: 20,
    country: "Latvia",
    2013: 14.4,
    2014: 14.2,
    2015: 14.4,
    2016: 14.5,
  },
  {
    id: 22,
    country: "Luxembourg",
    2013: 23.2,
    2014: 23,
    2015: 22.2,
    2016: 21.8,
  },
  {
    id: 24,
    country: "Netherlands",
    2013: 22.9,
    2014: 22.7,
    2015: 22.3,
    2016: 22,
  },
  {
    id: 25,
    country: "New Zealand",
    2013: 19.3,
    2014: 19.4,
    2015: 19.7,
    2016: null,
  },
  {
    id: 26,
    country: "Norway",
    2013: 21.8,
    2014: 22.4,
    2015: 23.9,
    2016: 25.1,
  },
  {
    id: 27,
    country: "Poland",
    2013: 19.6,
    2014: 19.5,
    2015: 19.4,
    2016: 20.2,
  },
  {
    id: 28,
    country: "Portugal",
    2013: 25.5,
    2014: 24.5,
    2015: 24.1,
    2016: 24.1,
  },
  {
    id: 29,
    country: "Slovak Republic",
    2013: 18.1,
    2014: 19.3,
    2015: 19.4,
    2016: 18.6,
  },
  {
    id: 30,
    country: "Slovenia",
    2013: 24,
    2014: 23.1,
    2015: 22.4,
    2016: 22.8,
  },
  {
    id: 31,
    country: "Spain",
    2013: 26.3,
    2014: 26.1,
    2015: 25.4,
    2016: 24.6,
  },
  {
    id: 32,
    country: "Sweden",
    2013: 27.4,
    2014: 27.1,
    2015: 26.7,
    2016: 27.1,
  },
  {
    id: 33,
    country: "Switzerland",
    2013: 19.2,
    2014: 19.3,
    2015: 19.6,
    2016: 19.7,
  },
  {
    id: 34,
    country: "Turkey",
    2013: 13.4,
    2014: 13.5,
    2015: null,
    2016: null,
  },
  {
    id: 35,
    country: "United Kingdom",
    2013: 21.9,
    2014: 21.6,
    2015: 21.5,
    2016: 21.5,
  },
  {
    id: 36,
    country: "United States",
    2013: 18.8,
    2014: 18.8,
    2015: 19,
    2016: 19.3,
  },
  {
    id: 37,
    country: "OECD",
    2013: 21.1,
    2014: 21.1,
    2015: 21,
    2016: 21,
  },
];

export default class Barchart extends PureComponent {
  render() {
    return (
      <div style={{ marginLeft: 30 }}>
        <h1>Bar Chart</h1>
        <BarChart
          width={1000}
          height={800}
          data={data}
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
