import React from 'react';
import SearchIcon from '../assets/searchIcon.svg';

const SearchBar = ({searchValue, setSearchValue}) => {
  function handleSearch(e){
    setSearchValue(e.target.value);
  }
  return (
      <div className="flex items-center w-[471px] h-[52px] border border-[#E4E4E4] rounded-full py-2 px-4 gap-[10px]">
        <img src={SearchIcon} alt="Search Icon" className="w-4 " /> 
        <input
          type="text"
          placeholder="Search drug name"
          className="flex-grow h-full border-none outline-none placeholder:text-gray-600 "
          onChange={handleSearch}
        />
      </div>
  );
};

export default SearchBar;
