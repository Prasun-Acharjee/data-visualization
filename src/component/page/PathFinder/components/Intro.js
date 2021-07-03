import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = {
  Dijkstra: {
    text: (
      <p style={{ width: "90%" }}>
        <a
          href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dijkstra Algorithm
        </a>{" "}
        an algorithm for finding the shortest paths between nodes in a graph,
        which may represent, for example, road networks. For a given source node
        in the graph, the algorithm finds the shortest path between that node
        and every other. It can also be used for finding the shortest paths from
        a single node to a single destination node by stopping the algorithm
        once the shortest path to the destination node has been determined.
      </p>
    ),
    complexity: (
      <div>
        <p>
          Worst case time complexity: O(E+V log V) if we use priority queue else
          it would be (V<sup>2</sup>)
        </p>
        <p>Average case time complexity: O(E+V log V)</p>
        <p>Best case time complexity: O(E+V log V)</p>
        <p>Space complexity: O(V)</p>
      </div>
    ),
  },
  DepthFirstSearch: {
    text: (
      <p style={{ width: "90%" }}>
        <a
          href="https://en.wikipedia.org/wiki/Depth-first_search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Depth First Search Algorithm
        </a>{" "}
        is an algorithm for traversing or searching tree or graph data
        structures. The algorithm starts at the root node (selecting some
        arbitrary node as the root node in the case of a graph) and explores as
        far as possible along each branch before backtracking.The algorithm
        starts at the root node (selecting some arbitrary node as the root node
        in the case of a graph) and explores as far as possible along each
        branch before backtracking. So the basic idea is to start from the root
        or any arbitrary node and mark the node and move to the adjacent
        unmarked node and continue this loop until there is no unmarked adjacent
        node. Then backtrack and check for other unmarked nodes and traverse
        them. Finally print the nodes in the path.
      </p>
    ),
    complexity: (
      <div>
        <p>Time complexity: O(V + E)</p>
        <p> Space complexity: O(V)</p>
      </div>
    ),
  },
  BreadthFirstSearch: {
    text: (
      <p style={{ width: "90%" }}>
        <a
          href="https://en.wikipedia.org/wiki/Breadth-first_search"
          target="_blank"
          rel="noopener noreferrer"
        >
          Breadth First Search Algorithm
        </a>{" "}
        is an algorithm for searching a tree data structure for a node that
        satisfies a given property. It starts at the tree root and explores all
        nodes at the present depth prior to moving on to the nodes at the next
        depth level. Extra memory, usually a queue, is needed to keep track of
        the child nodes that were encountered but not yet explored.The only
        catch here is, unlike trees, graphs may contain cycles, so we may come
        to the same node again. To avoid processing a node more than once, we
        use a boolean visited array. For simplicity, it is assumed that all
        vertices are reachable from the starting vertex.
      </p>
    ),
    complexity: (
      <div>
        <p>Time complexity: O(V + E)</p>
        <p> Space complexity: O(V)</p>
      </div>
    ),
  },
};
class IntroCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
    console.log(this.props);
  }
  render = () => {
    return (
      <Card style={{ width: "100%" }} className="text-center" bg="light">
        <Card.Body>
          <Card.Header>
            {this.props?.algorithm?.replace(/([A-Z])/g, " $1").trim()}
          </Card.Header>
          <Card.Body style={{ display: "flex" }}>
            <Card.Text
              style={{
                width: "50%",
                borderWidth: "0 1px 0 0",
                borderStyle: "solid",
              }}
            >
              {data[this.props.algorithm]?.text}
            </Card.Text>
            <Card.Text style={{ width: "50%" }}>
              {data[this.props.algorithm]?.complexity}
            </Card.Text>
          </Card.Body>
        </Card.Body>
      </Card>
    );
  };
}

export default class Intro extends React.Component {
  render = () => {
    return (
      <IntroCard
        header="header"
        text="
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere mi lacinia ultrices fermentum. Integer eget tincidunt nibh. Aenean euismod, augue eget placerat accumsan, erat mauris commodo tortor, in tempor nisl tellus eget libero. Fusce feugiat purus ante, a condimentum lectus laoreet eu. Mauris neque nisl, lacinia sit amet varius quis, elementum ut ex. Nam a feugiat arcu, sit amet semper elit. Phasellus commodo elementum suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non fringilla nisi. Vivamus egestas nisi vel condimentum congue. Mauris at nulla eget nunc placerat tincidunt vitae et ipsum."
        next={() => console.log("testing")}
        previous={() => console.log("testing")}
        {...this.props}
      ></IntroCard>
    );
  };
}
