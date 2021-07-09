import { useEffect, useState } from "react";
import axios from "axios";

import { API_BASE_URL } from "./consts";

export const useRandomUsers = (number) => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}?results=${number}`);
        // console.log(data);
        setUsers(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRandomUser();
  }, [number]);

  return users;
};
