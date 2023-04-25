import * as React from "react";
import { createRoot } from "react-dom/client";
import { useDropzone } from "react-dropzone";
import { parseCsv } from "./utils";
import { DSVRowArray } from "d3-dsv";

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

const createMindmap = async (contents: DSVRowArray<string>) => {
  const visited: Record<string, any> = [];
  const graph = createGraph(contents);

  visited[graph.root] = await miro.board.experimental.createMindmapNode({
    nodeView: { content: graph.root },
  });

  const nodes = Object.keys(graph.adjacencyList);
  // Create all nodes
  for (const node of nodes) {
    if (!visited[node]) {
      visited[node] = await miro.board.experimental.createMindmapNode({
        nodeView: {
          content: node,
        },
      });
    }
  }

  const linkItems = async (parent: string) => {
    const parentItem = visited[parent];

    for (const adjacent of graph.adjacencyList[parent]) {
      const childItem = visited[adjacent];
      await parentItem.add(childItem);
      await linkItems(adjacent);
    }
  };

  await linkItems(graph.root);
};

const dropzoneStyles = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  border: "3px dashed rgba(41, 128, 185, 0.5)",
  color: "rgba(41, 128, 185, 1.0)",
  fontWeight: "bold",
  fontSize: "1.2em",
} as const;

const App: React.FC = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const dropzone = useDropzone({
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
    onDrop: (droppedFiles) => {
      setFiles([droppedFiles[0]]);
    },
  });

  const handleCreate = async () => {
    const failed = [];
    for (const file of files) {
      try {
        const contents = await parseCsv(file);
        await createMindmap(contents);
      } catch (e) {
        failed.push(file);
        console.error(e);
      }
    }

    setFiles([]);
  };

  const style = React.useMemo(() => {
    let borderColor = "rgba(41, 128, 185, 0.5)";
    if (dropzone.isDragAccept) {
      borderColor = "rgba(41, 128, 185, 1.0)";
    }

    if (dropzone.isDragReject) {
      borderColor = "rgba(192, 57, 43,1.0)";
    }
    return {
      ...dropzoneStyles,
      borderColor,
    };
  }, [dropzone.isDragActive, dropzone.isDragReject]);

  return (
    <div className="dnd-container">
      <p>Select your CSV file to import it as a mind map</p>
      <div {...dropzone.getRootProps({ style })}>
        <input {...dropzone.getInputProps()} />
        {dropzone.isDragAccept ? (
          <p className="dnd-text">Drop your CSV file are here</p>
        ) : (
          <>
            <div>
              <button
                type="button"
                className="button button-primary button-small"
              >
                Select CSV file
              </button>
              <p className="dnd-text">Or drop your CSV file here</p>
            </div>
          </>
        )}
      </div>
      {files.length > 0 && (
        <>
          <ul className="dropped-files">
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>

          <button
            onClick={handleCreate}
            className="button button-small button-primary"
          >
            Create mindmap
          </button>
        </>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
