import { useContext, useState } from "react";
import { WTDDetailContext } from "./WTDDetailProvider";
import { UserContext } from "../Users/UserProvider";
import WTDAddMemberForm from "./WTDAddMember";
import WTDMember from "./WTDMember";
import Button from "react-bootstrap/Button";
import { IoExitOutline, IoPersonAdd } from "react-icons/io5";

function WTDMemberList() {
  const { data, handlerMap } = useContext(WTDDetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const isOwner = data.owner === loggedInUser;

  return (
    <div className="member-list-container">
      <WTDAddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />
      <div className="member-list-header">
        {isOwner ? (
          <Button variant="success" onClick={() => setShow(true)}>
            <IoPersonAdd size={20} />
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => handlerMap.removeMember({ memberId: loggedInUser })}
          >
            <IoExitOutline size={20} />
          </Button>
        )}
      </div>
      <div className="member-list">
        <div className="member-list-names">
          <WTDMember
            memberId={data.owner}
            data={userMap[data.owner]}
            isOwner={true}
            handlerMap={handlerMap}
            showRemoveButton={false}
          />
          {data.memberList
            .filter((memberId) => memberId !== data.owner)
            .map((memberId) => (
              <WTDMember
                key={memberId}
                memberId={memberId}
                data={userMap[memberId]}
                isOwner={false}
                handlerMap={handlerMap}
                isSelf={loggedInUser === memberId}
                showRemoveButton={loggedInUser === data.owner}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default WTDMemberList;
