import { useContext } from "react";
import { WTDDetailContext } from "./WTDDetailProvider";
import WTDItem from "./WTDItem";
import Button from "react-bootstrap/Button";
import { MdAddBox } from "react-icons/md";

function WTDItemList() {
  const { data, handlerMap } = useContext(WTDDetailContext);

  return (
    <div>
      <div style={{ margin: "8px", padding: "8px" }}>
        {data.itemList.map((item) => (
          <WTDItem key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>

      <Button variant="success" onClick={() => handlerMap.addItem()}>
        <MdAddBox size={20} />
      </Button>
    </div>
  );
}

export default WTDItemList;
