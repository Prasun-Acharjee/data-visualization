import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    year: 1995,
    accidents: 148865,
    casualties: 10323,
    fatalities: 331747,
  },
  {
    year: 1996,
    accidents: 165052,
    casualties: 12653,
    fatalities: 355962,
  },
  {
    year: 1997,
    accidents: 246452,
    casualties: 11603,
    fatalities: 343159,
  },
  {
    year: 1998,
    accidents: 239721,
    casualties: 9057,
    fatalities: 340564,
  },
  {
    year: 1999,
    accidents: 275938,
    casualties: 9353,
    fatalities: 402967,
  },
  {
    year: 2000,
    accidents: 290481,
    casualties: 10236,
    fatalities: 426984,
  },
  {
    year: 2001,
    accidents: 260579,
    casualties: 8097,
    fatalities: 386539,
  },
  {
    year: 2002,
    accidents: 231026,
    casualties: 7222,
    fatalities: 348149,
  },
  {
    year: 2003,
    accidents: 240832,
    casualties: 7212,
    fatalities: 376503,
  },
  {
    year: 2004,
    accidents: 220755,
    casualties: 6563,
    fatalities: 346987,
  },
  {
    year: 2005,
    accidents: 214171,
    casualties: 6376,
    fatalities: 342233,
  },
  {
    year: 2006,
    accidents: 213745,
    casualties: 6327,
    fatalities: 340229,
  },
  {
    year: 2007,
    accidents: 211662,
    casualties: 6166,
    fatalities: 335906,
  },
  {
    year: 2008,
    accidents: 215822,
    casualties: 5870,
    fatalities: 338962,
  },
  {
    year: 2009,
    accidents: 231990,
    casualties: 5838,
    fatalities: 361875,
  },
  {
    year: 2010,
    accidents: 226878,
    casualties: 5505,
    fatalities: 352458,
  },
  {
    year: 2011,
    accidents: 221711,
    casualties: 5229,
    fatalities: 341391,
  },
  {
    year: 2012,
    accidents: 223656,
    casualties: 5392,
    fatalities: 344565,
  },
  {
    year: 2013,
    accidents: 215354,
    casualties: 5092,
    fatalities: 328711,
  },
  {
    year: 2014,
    accidents: 223552,
    casualties: 4762,
    fatalities: 337497,
  },
  {
    year: 2015,
    accidents: 232035,
    casualties: 4621,
    fatalities: 350400,
  },
  {
    year: 2016,
    accidents: 220917,
    casualties: 4292,
    fatalities: 331720,
  },
];

export default class Areachart extends PureComponent {
  render() {
    return (
      <div style={{ marginLeft: "30px" }}>
        <h1>Area Chart</h1>
        <AreaChart
          width={800}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="accidents"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="casualties"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="fatalities"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
    );
  }
}
