import React from 'react';
import PropTypes from 'prop-types';
import Input from '../UI/Input/Input';
import './SearchRecord.scss';
/**
 * SearchRecord from the list of All records based on user input
 */
const SearchRecord = props => {
  // This function will search the title from the list of records
  const findSearchedItem = event => {
    const value = event.target.value;
    const data = props.searchItem;
    const result = data && data.length && data.filter(list => list.title.includes(value));
    if (value && !value.length) return props.allItems([...data], false);
    props.allItems(result, value.length);
  }

  return (
    <div>
      <h1>REACT 4.2 - TEST APP</h1>
      <Input placeholder='Search By Title' onChange={findSearchedItem} />
    </div>
  );
};
SearchRecord.propTypes = {
  allItems: PropTypes.func,
  searchItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};
export default SearchRecord;
