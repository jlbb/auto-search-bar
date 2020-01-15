import React, { useEffect, useRef } from "react";
import { useDebounce } from "../hooks";
import ClearIcon from "../ClearIcon";
import LoadingIcon from "../LoadingIcon";
import classNames from "classnames";

interface Props {
  inputValue: string;
  loading: boolean;
  onSearch: (term: string) => any;
  onCancel: () => any;
}

const SearchInput: React.FC<Props> = ({
  inputValue = "",
  loading = false,
  onSearch,
  onCancel
}) => {
  const inputRef: any = useRef(null);
  const [debouncedValue, searchInput, setSearchInput] = useDebounce<string>(
    inputValue,
    500
  );

  useEffect(() => {
    debouncedValue !== "" && onSearch(searchInput);
  }, [debouncedValue]);

  useEffect(() => {
    searchInput === "" && onCancel();
  }, [searchInput]);

  useEffect(() => {
    const refValue = inputRef.current.value;
    inputRef.current.value = refValue !== inputValue ? inputValue : refValue;
  }, [inputValue]);

  const onClearSearch = (): void => {
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
