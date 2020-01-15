import React from "react";

interface Props {
  term?: string;
  list: any[];
  onSelect?: (item: any) => any;
}

const PopupList: React.FC<Props> = ({ term = "", list, onSelect }) => {
  const onSelectItem = (item: any): void => {
    onSelect && onSelect(item.name);
  };

  return list ? (
    <ul className="PopupList">
      {list.length > 0
        ? list.map((item, idx) => (
            <li
              className="PopupList-item"
              key={`${item.name}-${idx}`}
              onClick={() => onSelectItem(item)}
            >
              {item.name}
            </li>
          ))
        : "Not found results"}
    </ul>
  ) : null;
};

export default PopupList;
