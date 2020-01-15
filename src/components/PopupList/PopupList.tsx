import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { highlightSubstr } from "../../common/utils";
import { useOutsideNotifier } from "../hooks";

interface Props {
  term?: string;
  list: any;
  onSelect?: (item: any) => any;
}

const PopupList: React.FC<Props> = ({ term = "", list, onSelect }) => {
  const [popupList, setPopupList] = useState();
  const ulRef = useRef(null);
  useOutsideNotifier(ulRef, () => setPopupList(null));

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (event: any) => {
        if (event.keyCode === 27) {
          console.log("ESC!!", event);
          setPopupList(null);
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    setPopupList(list);
  }, [list]);

  const onSelectItem = (item: any): void => {
    onSelect && onSelect(item.name);
    setPopupList(null);
  };

  return popupList ? (
    <ul
      className={classNames("PopupList", {
        active: popupList.length > 0
      })}
      ref={ulRef}
    >
      {popupList.length > 0 ? (
        popupList.map((item: any, idx: number) => {
          return (
            <li
              className="PopupList-item"
              key={`${item.name}-${idx}`}
              onClick={() => onSelectItem(item)}
              onKeyPress={() => onSelectItem(item)}
              tabIndex={3 + idx}
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
