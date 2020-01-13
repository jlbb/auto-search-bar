import React from "react";
import SearchInput from "../SearchInput";
import PopupList from "../PopupList";

const SearchBox: React.FC = () => {
  return (
    <div className="SearchBox">
      <SearchInput />
      <PopupList />
    </div>
  );
};

export default SearchBox;
