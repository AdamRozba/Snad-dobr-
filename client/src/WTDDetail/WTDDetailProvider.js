import { createContext, useMemo, useState } from "react";

export const WTDDetailContext = createContext();

function WTDDetailProvider({ children }) {
  const [data, setData] = useState({
    id: "tdl01",
    name: "Shopping List 1",
    owner: "u1",
    memberList: ["u2", "u3"],
    itemList: [
      {
        id: "td01",
        name: "Shopping List Item 1",
        resolved: false,
      },
    ],
  });

  const [showResolved, setShowResolved] = useState(false);

  const filteredData = useMemo(() => {
    const result = { ...data };
    if (!showResolved) {
      result.itemList = result.itemList.filter((item) => !item.resolved);
    }
    return result;
  }, [data, showResolved]);

  const value = {
    data: filteredData,
    handlerMap: {
      updateName: ({ name }) => {
        setData((current) => {
          current.name = name;
          return { ...current };
        });
      },
      addItem: () => {
        setData((current) => {
          current.itemList.push({
            id: Math.random(),
            name: "",
            resolved: false,
          });
          return { ...current };
        });
      },
      updateItemName: ({ id, name }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            name,
          };
          return { ...current };
        });
      },
      toggleResolveItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          current.itemList[itemIndex] = {
            ...current.itemList[itemIndex],
            resolved: !current.itemList[itemIndex].resolved,
          };
          return { ...current };
        });
      },
      deleteItem: ({ id }) => {
        setData((current) => {
          const itemIndex = current.itemList.findIndex(
            (item) => item.id === id
          );
          console.log(itemIndex);
          current.itemList.splice(itemIndex, 1);
          return { ...current };
        });
      },
      addMember: ({ memberId }) => {
        setData((current) => {
          if (!current.memberList.includes(memberId))
            current.memberList.push(memberId);
          return { ...current };
        });
      },
      removeMember: ({ memberId }) => {
        setData((current) => {
          const memberIndex = current.memberList.findIndex(
            (item) => item === memberId
          );
          if (memberIndex > -1) current.memberList.splice(memberIndex, 1);
          return { ...current };
        });
      },
    },
    showResolved,
    toggleShowResolved: () => setShowResolved((current) => !current),
  };
  return (
    <WTDDetailContext.Provider value={value}>
      {children}
    </WTDDetailContext.Provider>
  );
}

export default WTDDetailProvider;
