import React from "react";
import Home from "./component/page/Home/index";
import Linechart from "./component/page/LineCharts";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Barchart from "./component/page/BarCharts";
import Areachart from "./component/page/AreaCharts";
import Heatmaps from "./component/page/HeatMaps";
import NetworkGraph from "./component/page/NetworkGraph";

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/linechart" component={Linechart} />
      <Route path="/barchart" component={Barchart} />
      <Route path="/areachart" component={Areachart} />
      <Route path="/heatmaps" component={Heatmaps} />
      <Route path="/networkGraph" component={NetworkGraph} />
    </Switch>
  </main>
);

export default App;
