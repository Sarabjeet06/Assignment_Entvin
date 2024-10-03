import React from 'react';
import SearchIcon from '../assets/searchIcon.svg';

const SearchBar = ({searchValue, setSearchValue}) => {
  function handleSearch(e){
    setSearchValue(e.target.value);
  }
  return (
      <div className="flex items-center w-[471px] h-[52px] border border-[#E4E4E4] rounded-full px-4">
        <img src={SearchIcon} alt="Search Icon" className="h-4 w-4 mr-2" /> 
        <input
          type="text"
          placeholder="Search drug name"
          className="flex-grow h-full border-none outline-none placeholder:text-gray-400"
          onChange={handleSearch}
        />
      </div>
  );
};

export default SearchBar;
