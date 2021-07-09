import React from "react";
import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";

import { ITEM_COUNT } from "../../utils/consts";

const UserList = () => {
  const users = useSelector((state) => state.user.users);

  const UserItem = ({ index, style }) => (
    <div style={style}>{users[index]?.email}</div>
  );

  if (!users) return <>...Loading</>;

  return (
    <List height={400} itemCount={ITEM_COUNT} itemSize={35} width={300}>
      {UserItem}
    </List>
  );
};

export default UserList;
