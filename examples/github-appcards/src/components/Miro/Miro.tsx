import * as React from "react";
import NoSelection from "./NoSelection";
import Selection from "./Selection";
import {
  createGitHubProjectCard,
  createGitHubIssue,
  insertAppCards,
  removeSelectedItem,
} from "../../utils";
import { username, repo } from "../../constants";

interface SelectedColumn {
  name: string;
  id: number;
}

interface SelectedColor {
  background: string;
}

const Miro = () => {
  const [itemsSelected, setItemsSelected] = React.useState(false);
  const [selectedColumn, setSelectedColumn] = React.useState<SelectedColumn>({
    name: "",
    id: 0,
  });
  const [selectedColor, setSelectedColor] = React.useState<SelectedColor>({
    background: "#1A1A1A",
  });
  const [selectedItems, setSelectedItems] = React.useState<any[]>([]);

  // Handle creating GitHub Issue & Card (inside project) in GitHub
  const handleCreateGitHubCards = (selectedItems: any[]) => {
    selectedItems.map(async (item) => {
      const cleanedContent = item.content.replace(/<\/?[^>]+(>|$)/g, "");

      const gitHubIssue = await createGitHubIssue(username, repo, {
        title: cleanedContent,
        body: "Imported from Miro",
      });

      const gitHubProjectCard = await createGitHubProjectCard(
        `${selectedColumn.id}`,
        {
          note: null,
          content_id: gitHubIssue.id,
          content_type: "Issue",
        },
      );

      await insertAppCards(item, selectedColor, gitHubProjectCard, gitHubIssue);
      await removeSelectedItem(item);
    });
  };

  // Get selection on initialization
  React.useEffect(() => {
    // Listen to selection updates
    miro.board.ui.on("selection:update", async (event) => {
      const selectedItems = event.items;

      // Filter sticky notes from the selected items
      const stickyNotes = selectedItems.filter(
        (item) => item.type === "sticky_note",
      );

      // Check to see if sticky notes are selected
      if (stickyNotes.length > 0) {
        setItemsSelected(true);
        setSelectedItems([...selectedItems]);
      } else {
        setItemsSelected(false);
        setSelectedItems([]);
      }
    });
  }, []);

  return (
    <div className="miro-container">
      {!itemsSelected ? (
        <NoSelection />
      ) : (
        <Selection
          onSelectColumn={(column) => setSelectedColumn(column)}
          onSelectColor={(color) => setSelectedColor(color)}
          color={selectedColor}
        />
      )}

      <button
        className="button button-primary"
        disabled={!itemsSelected}
        onClick={() => handleCreateGitHubCards(selectedItems)}
      >
        Convert to GitHub card
      </button>
    </div>
  );
};

export default Miro;
