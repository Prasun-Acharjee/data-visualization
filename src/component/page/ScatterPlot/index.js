import React, { useState } from "react";
import { scaleLinear, scaleOrdinal, max, format, extent, scaleSqrt } from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { ColorLegend } from "./ColorLegend";

const width = 1060;
const height = 500;
const margin = {
  top: 20,
  right: 200,
  bottom: 65,
  left: 110,
};
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 75;
const fadeOpacity = 0.2;

const ScatterPlot = () => {
  const data = useData();
  const [hoveredValue, setHoveredValue] = useState(null);

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = (d) => d["Current Price"];
  const xAxisLabel = "Current Price";

  const xValueTooltip = (d) => d["Post-SPAC Ticker Symbol"];

  const yValue = (d) => d["Annualized Return (from SPAC IPO)"];
  const yAxisLabel = "Annualized Return";

  const colorValue = (d) => d["sector"];
  const colorLegendLabel = "Sector";

  const filteredData = data.filter((d) => hoveredValue === colorValue(d));

  const circleRadius = 5;

  const siXFormat = format("$.1f");
  const xAxisTickFormat = (tickValue) => siXFormat(tickValue);

  const siYFormat = format(".0%");
  const yAxisTickFormat = (tickValue) => siYFormat(tickValue);

  const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight - 50, 0])
    .nice();

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range([
      "#00876c",
      "#003f5c",
      "#2f4b7c",
      "#6595b4",
      "#665191",
      "#a05195",
      "#d45087",
      "#f95d6a",
      "#ec838a",
      "#ff7c43",
      "#ffa600",
      "#e5f029",
      "",
    ]);

  const sizeValue = (d) => d["Market Cap"];
  const maxRadius = 10;

  const sizeScale = scaleSqrt()
    .domain([0, max(data, sizeValue)])
    .range([0, maxRadius]);

  const tooltipContent = (d) => d["Post-SPAC Company Name"];
  console.log("test123", tooltipContent);

  return (
    <div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft
            yScale={yScale}
            innerWidth={innerWidth}
            tickOffset={15}
            tickFormat={yAxisTickFormat}
          />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <g transform={`translate(${innerWidth + 60}, 60)`}>
            <text x={35} y={-25} className="axis-label" textAnchor="middle">
              {colorLegendLabel}
            </text>
            <ColorLegend
              tickSpacing={22}
              tickSize={10}
              tickTextOffset={12}
              // tickSize={circleRadius}
              colorScale={colorScale}
              onHover={setHoveredValue}
              hoveredValue={hoveredValue}
              fadeOpacity={fadeOpacity}
            />
          </g>
          <g opacity={hoveredValue ? fadeOpacity : 0.9}>
            <Marks
              data={data}
              xScale={xScale}
              xValue={xValue}
              yScale={yScale}
              yValue={yValue}
              colorScale={colorScale}
              colorValue={colorValue}
              tooltipFormat={yAxisTickFormat}
              xValueTooltip={xValueTooltip}
              circleRadius={circleRadius}
              sizeScale={sizeScale}
              sizeValue={sizeValue}
              tooltipContent={tooltipContent}
            />
          </g>
          <Marks
            data={filteredData}
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
            colorScale={colorScale}
            colorValue={colorValue}
            tooltipFormat={yAxisTickFormat}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
            tooltipContent={tooltipContent}
          />
        </g>
      </svg>
    </div>
  );
};

export default ScatterPlot;
