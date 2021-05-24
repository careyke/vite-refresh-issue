import React, { useEffect, useState } from "react";

import classes from "./index.module.less";
import List from "./List";
import { IList, IListItem } from "./type";

const initLists: IList[] = [
  { id: 1, title: "list-1", children: [] },
  { id: 2, title: "list-2", children: [] },
];

const App = () => {
  const [lists, setLists] = useState<IList[]>([]);

  const appendItems = (items: IListItem[], index: number) => {
    setLists((prevLists) => {
      prevLists[index].children = prevLists[index].children.concat(items);
      return [...prevLists];
    });
  };

  const renderList = () => {
    return lists.map((item, index) => {
      return (
        <List
          key={item.id}
          list={item}
          index={index}
          appendItems={appendItems}
        />
      );
    });
  };

  useEffect(() => {
    setLists(initLists);
  }, []);

  return (
    <div className={classes.container}>
      <div>try to change this text</div>
      <div>{renderList()}</div>
    </div>
  );
};

export default App;
