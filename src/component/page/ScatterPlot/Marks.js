export const Marks = ({
  data,
  xScale,
  xValue,
  yScale,
  yValue,
  xValueTooltip,
  colorScale,
  colorValue,
  tooltipFormat,
  tooltipContent,
  sizeScale,
  sizeValue,
}) =>
  data.map((d) => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={sizeScale(sizeValue(d))}
    >
      <title>
        The annualized rate of return of {tooltipContent(d)} is{" "}
        {tooltipFormat(yValue(d))}
      </title>
    </circle>
  ));
