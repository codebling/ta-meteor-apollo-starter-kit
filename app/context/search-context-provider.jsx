import React from 'react';
import SearchContext from './search-context';

const Input = ({ inputValue, setInputValue }) => {
  const handleValueChange = event => setInputValue(event.target.value);
  return <input type="text" value={inputValue} onChange={handleValueChange} />;
};

const SearchContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = React.useState('');
  const ControlledInput = <Input {...{ inputValue, setInputValue }} />;

  return (
    <SearchContext.Provider
      value={{
        searchInput: ControlledInput,
        searchValue: inputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
