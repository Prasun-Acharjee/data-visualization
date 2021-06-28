import React, { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/pnlinyz/dd3f214242330cbb3ac1dac9dd067046/raw/SPAC%2520List";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d["Post-SPAC Ticker Symbol"] = d["Post-SPAC Ticker Symbol"];
      d["Post-SPAC Company Name"] = d["Post-SPAC Company Name"];
      d["Annualized Return (from SPAC IPO)"] =
        d["Annualized Return (from SPAC IPO)"];
      d["Current Price"] = +d["Current Price"];
      d["Market Cap"] = +d["Market Cap"];
      d["forwardPE"] = +d["forwardPE"];
      d["forwardPE"] = +d["forwardPE"];
      d["heldPercentInstitutions"] = +d["heldPercentInstitutions"];
      d["sector"] = d["sector"];
      d["industry"] = d["industry"];
      d["country"] = d["country"];
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
