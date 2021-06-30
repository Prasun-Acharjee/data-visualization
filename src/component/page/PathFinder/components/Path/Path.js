import BreadthFirstSearch from "./BreadthFirstSearch";
import DepthFirstSearch from "./DepthFirstSearch";
import Dijkstra from "./Dijkstra";

// wrapper json for all functionality
export default {
  BreadthFirstSearch: BreadthFirstSearch,
  DepthFirstSearch: DepthFirstSearch,
  Dijkstra: Dijkstra,
  none: function () {},
};
