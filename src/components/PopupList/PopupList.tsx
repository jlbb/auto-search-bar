import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { highlightSubstr } from "../../common/utils";

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
    <ul
      className={classNames("PopupList", {
        active: list.length > 0
      })}
    >
      {list.length > 0 ? (
        list.map((item, idx) => {
          return (
            <li
              className="PopupList-item"
              key={`${item.name}-${idx}`}
              onClick={() => onSelectItem(item)}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: highlightSubstr(item.name, term)
                }}
              />
            </li>
          );
        })
      ) : (
        <li className="PopupList-item notFound">"Not found results"</li>
      )}
    </ul>
  ) : null;
};

export default PopupList;
