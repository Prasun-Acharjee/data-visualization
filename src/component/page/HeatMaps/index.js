import React from "react";
import "./heatmaps.css";
import * as d3 from "d3";
class Heatmaps extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const url =
      "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json";

    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        const data = res.monthlyVariance,
          baseTemperature = res.baseTemperature,
          yearRange = d3.extent(data, (d) => {
            return d.year;
          });
        console.log(data, baseTemperature, yearRange);
        const legendData = [
          { interval: 2.7, color: "purple" },
          { interval: 3.9, color: "darkorchid" },
          { interval: 6.1, color: "mediumpurple" },
          { interval: 7.2, color: "lightskyblue" },
          { interval: 8.3, color: "khaki" },
          { interval: 9.4, color: "orange" },
          { interval: 10.5, color: "salmon" },
          { interval: 11.6, color: "indianred" },
          { interval: 15, color: "darkred" },
        ];

        const width = 917,
          height = 408,
          margins = { top: 20, right: 50, bottom: 100, left: 100 };

        const yScale = d3.scaleLinear().range([height, 0]).domain([12, 0]);

        const xScale = d3
          .scaleLinear()
          .range([0, width])
          .domain(
            d3.extent(data, (d) => {
              return d.year;
            })
          );

        //Setting chart width and adjusting for margins
        const chart = d3
          .select(".chart")
          .attr("width", width + margins.right + margins.left)
          .attr("height", height + margins.top + margins.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margins.left + "," + margins.top + ")"
          );

        const tooltip = d3
          .select(".container")
          .append("div")
          .attr("class", "tooltip")
          .html("Tooltip");

        const barWidth = width / (yearRange[1] - yearRange[0]),
          barHeight = height / 12;

        //Return dynamic color based on intervals in legendData
        const colorScale = (d) => {
          for (let i = 0; i < legendData.length; i++) {
            if (d.variance + baseTemperature < legendData[i].interval) {
              return legendData[i].color;
            }
          }
          return "darkred";
        };

        //Return abbreviate month string from month decimal
        const timeParseFormat = (d) => {
          if (d === 0) return "";
          return d3.timeFormat("%b")(d3.timeParse("%m")(d));
        };

        //Append heatmap bars, styles, and mouse events
        chart
          .selectAll("g")
          .data(data)
          .enter()
          .append("g")
          .append("rect")
          .attr("x", (d) => {
            return (d.year - yearRange[0]) * barWidth;
          })
          .attr("y", (d) => {
            return (d.month - 1) * barHeight;
          })
          .style("fill", colorScale)
          .attr("width", barWidth)
          .attr("height", barHeight)
          .on("mouseover", (d, data) => {
            console.log(d, data);
            tooltip
              .html(
                timeParseFormat(data.month) +
                  " " +
                  data.year +
                  "<br/>" +
                  d3.format(".4r")(baseTemperature + data.variance) +
                  " &degC<br/>" +
                  data.variance +
                  " &degC"
              )
              .style("left", d.pageX - 35 + "px")
              .style("top", d.pageY - 73 + "px")
              .style("opacity", 0.9);
          })
          .on("mouseout", () => {
            tooltip.style("opacity", 0).style("left", "0px");
          });

        //Append x axis
        chart
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(xScale).tickFormat(d3.format(".4")));

        //Append y axis
        chart
          .append("g")
          .attr("transform", "translate(0,-" + barHeight / 2 + ")")
          .call(d3.axisLeft(yScale).tickFormat(timeParseFormat))
          .attr("class", "yAxis");

        //Append y axis label
        chart
          .append("text")
          .attr("transform", "translate(-40," + height / 2 + ") rotate(-90)")
          .style("text-anchor", "middle")
          .text("Month");

        //Append x axis label
        chart
          .append("text")
          .attr(
            "transform",
            "translate(" + width / 2 + "," + (height + 40) + ")"
          )
          .style("text-anchor", "middle")
          .text("Year");

        //Append color legend using legendData
        chart
          .append("g")
          .selectAll("g")
          .data(legendData)
          .enter()
          .append("rect")
          .attr("width", 30)
          .attr("height", 20)
          .attr("x", (d, i) => {
            return i * 30 + width * 0.7;
          })
          .attr("y", height + margins.top)
          .style("fill", (d) => {
            return d.color;
          });

        //Append text labels for legend from legendData
        chart
          .append("g")
          .selectAll("text")
          .data(legendData)
          .enter()
          .append("text")
          .attr("x", (d, i) => {
            return i * 30 + width * 0.7;
          })
          .attr("y", height + margins.top * 3)
          .text((d) => {
            return d.interval;
          });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Monthly Global Land-Surface Temperature</h1>
        <svg className="chart"></svg>
      </div>
    );
  }
}

export default Heatmaps;
