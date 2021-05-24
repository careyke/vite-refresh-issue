import React, { FC, useEffect } from "react";

import { IListItem, IList } from "./type";

interface ListProps {
  list: IList;
  index: number;
  appendItems: (items: IListItem[], index: number) => void;
}

const List: FC<ListProps> = (props) => {
  const { list, index, appendItems } = props;

  const renderItems = () => {
    return list.children.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  };

  useEffect(() => {
    appendItems(
      [
        { id: 1, title: `${index}-1` },
        { id: 2, title: `${index}-2` },
      ],
      index
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return <ul>{renderItems()}</ul>;
};

export default List;
