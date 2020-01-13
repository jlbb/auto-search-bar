import React, { useState } from "react";
import { debounce } from "lodash";

interface Props {
  onSearch: (term: string) => any;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const onSubmitSearch = debounce(() => onSearch(searchInput), 1000);

  return (
    <div className="SearchInput">
      <input
        placeholder="Introduce a planet to search"
        onChange={e => setSearchInput(e.target.value)}
        onKeyUp={onSubmitSearch}
        type="text"
      />
    </div>
  );
};

export default SearchInput;
