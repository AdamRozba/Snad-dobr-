import { useState } from "react";
import "../Styles.css";
import Button from "react-bootstrap/Button";
import { MdDoneAll, MdOutlineRemoveDone } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import "./WTDItem.css";

function WTDItem({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div className="item-container">
      <Button
        variant={`${data.resolved ? "secondary" : "success"}`}
        onClick={() => handlerMap.toggleResolveItem({ id: data.id })}
      >
        {data.resolved ? (
          <MdOutlineRemoveDone size={20} />
        ) : (
          <MdDoneAll size={20} />
        )}
      </Button>
      <input
        type="text"
        value={value}
        placeholder="Type here"
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
      />
      <Button
        variant="danger"
        onClick={() => handlerMap.deleteItem({ id: data.id })}
      >
        <IoTrash size={20} />
      </Button>
    </div>
  );
}

export default WTDItem;
