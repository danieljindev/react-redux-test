import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import UserList from "./components/user/UserList";
import { fetchUsers } from "./slices/user";
import { ITEM_COUNT } from "./utils/consts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(ITEM_COUNT));
  });

  return (
    <Fragment>
      <UserList />
    </Fragment>
  );
};

export default App;
