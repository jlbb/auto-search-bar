import React, { useEffect, useRef } from "react";
import { useDebounce } from "../hooks";
import ClearIcon from "../ClearIcon";
import LoadingIcon from "../LoadingIcon";
import classNames from "classnames";

interface Props {
  loading: boolean;
  onSearch: (term: string) => any;
  onCancel: () => any;
}

const SearchInput: React.FC<Props> = ({
  loading = false,
  onSearch,
  onCancel
}) => {
  const inputRef: any = useRef(null);
  const [debouncedValue, searchInput, setSearchInput] = useDebounce<string>("");

  useEffect(() => {
    debouncedValue !== "" && onSearch(searchInput);
  }, [debouncedValue]);

  useEffect(() => {
    searchInput === "" && onCancel();
  }, [searchInput]);

  const onClearSearch = () => {
    setSearchInput("");
    inputRef && inputRef.current.focus();
  };

  return (
    <div className="SearchInput">
      <input
        autoFocus
        placeholder="Introduce a planet to search"
        onChange={e => {
          setSearchInput(e.target.value);
        }}
        ref={inputRef}
        value={searchInput}
        type="text"
      />
      {loading ? (
        <span className={classNames("SearchInput-loadingIcon")}>
          <LoadingIcon />
        </span>
      ) : null}
      <button
        className={classNames("SearchInput-clearButton", {
          active: searchInput !== ""
        })}
        type="submit"
        onClick={onClearSearch}
      >
        <ClearIcon />
      </button>
    </div>
  );
};

export default SearchInput;
