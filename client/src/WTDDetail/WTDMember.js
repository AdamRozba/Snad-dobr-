import Button from "react-bootstrap/Button";
import { IoExitOutline } from "react-icons/io5";
import { SiMainwp } from "react-icons/si";
import "./WTDMember.css";

function WTDMember({ data, handlerMap, isOwner, showRemoveButton, isSelf }) {
  return (
    <div className="member-item">
      <span className="member-name">{data.name}</span>
      <div className="member-actions">
        {isOwner ? <SiMainwp size={25} /> : null}
        {showRemoveButton && !isSelf ? (
          <Button
            variant="danger"
            onClick={() => handlerMap.removeMember({ memberId: data.id })}
          >
            <IoExitOutline size={20} />
          </Button>
        ) : null}
      </div>
    </div>
  );
}

export default WTDMember;
