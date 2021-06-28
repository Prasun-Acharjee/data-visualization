import React from "react";
import Home from "./component/page/Home/index";
import Linechart from "./component/page/LineCharts";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Barchart from "./component/page/BarCharts";
import Areachart from "./component/page/AreaCharts";
import Heatmaps from "./component/page/HeatMaps";
import NetworkGraph from "./component/page/NetworkGraph";
import ScatterPlotDynamic from "./component/page/ScatterPlotDynamic";
import MainHome from "./home";
import PathFindHome from "./component/page/PathFinder/home";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MainHome} />
      <Route exact path="/data-visulization" component={Home} />
      <Route path="/linechart" component={Linechart} />
      <Route path="/barchart" component={Barchart} />
      <Route path="/areachart" component={Areachart} />
      <Route path="/heatmaps" component={Heatmaps} />
      <Route path="/networkGraph" component={NetworkGraph} />
      <Route exact path="/scatterplot" component={ScatterPlotDynamic} />
      <Route exact path="/algo-visulization" component={PathFindHome} />
    </Switch>
  </main>
);

export default App;
