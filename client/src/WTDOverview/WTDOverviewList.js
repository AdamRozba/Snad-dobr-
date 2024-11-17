import WTDOverviewItem from "./WTDOverviewItem";
import "../Styles.css";

function WTDOverviewList({
  toDoListOverviewList,
  handleArchive,
  handleDelete,
}) {
  return (
    <div className="tiles-container">
      {toDoListOverviewList.map((toDoList) => (
        <WTDOverviewItem
          key={toDoList.id}
          toDoList={toDoList}
          handleArchive={handleArchive}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default WTDOverviewList;
