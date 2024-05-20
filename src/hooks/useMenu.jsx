import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("./menu.json").then((res) => {
      const items = res.data;
      setMenus(items);
      setLoading(false);
    });
  }, []);
  return [menus, loading];
};

export default useMenu;
