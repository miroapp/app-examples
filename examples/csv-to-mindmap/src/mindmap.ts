import { DSVRowArray } from "d3-dsv";

/**
 * Create graph from CSV rows
 *
 * @param contents CSV rows
 * @returns Graph representation using adjacency list
 */
const createGraph = (contents: DSVRowArray<string>) => {
  const adjacencyList: Record<string, Set<string>> = {};
  const root = contents[0][0]!;

  const cols = contents.columns.reverse();
  for (const row of contents) {
    // start from leaf
    let child = undefined;
    for (const col of cols) {
      const value = row[col]!;

      if (value === "") continue;

      if (!adjacencyList[value]) {
        adjacencyList[value] = new Set();
      }

      if (child) {
        adjacencyList[value].add(child);
      }

      child = value;
    }
  }

  return { adjacencyList, root };
};

/**
 * Create mindmap from CSV rows
 *
 * @param contents CSV rows
 */
export const createMindmap = async (contents: DSVRowArray<string>) => {
  const visited: Record<string, any> = [];
  const graph = createGraph(contents);

  // Create all nodes
  visited[graph.root] = await miro.board.experimental.createMindmapNode({
    nodeView: { content: graph.root },
  });

  const nodes = Object.keys(graph.adjacencyList);
  for (const node of nodes) {
    if (!visited[node]) {
      visited[node] = await miro.board.experimental.createMindmapNode({
        nodeView: {
          content: node,
        },
      });
    }
  }

  // Create parent-child relations
  const createRelations = async (parent: string) => {
    const parentItem = visited[parent];

    for (const adjacent of graph.adjacencyList[parent]) {
      const childItem = visited[adjacent];
      await parentItem.add(childItem);
      await createRelations(adjacent);
    }
  };

  await createRelations(graph.root);
};
