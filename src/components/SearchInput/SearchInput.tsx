import React, { useState } from "react";
import { useDebounce } from "../hooks";

interface Props {
  onSearch: (term: string) => any;
  onCancel: () => any;
}

const SearchInput: React.FC<Props> = ({ onSearch, onCancel }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const onSubmitSearch = useDebounce(() => {
    console.log("Debouncing submit search", searchInput);
    searchInput !== "" ? onSearch(searchInput) : onCancel();
  });

  return (
    <div className="SearchInput">
      <input
        placeholder="Introduce a planet to search"
        onChange={e => setSearchInput(e.target.value)}
        onKeyUp={onSubmitSearch}
        type="text"
      />
      <button type="submit" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default SearchInput;
