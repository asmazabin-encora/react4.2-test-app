import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button/Button';
import { Table } from 'reactstrap';
import './SearchResults.scss';

/**
 * This component will display the searched items
 */
const searchResults = props => {
  let fetchedItems = [];
  let noItems = '';

  const showResult = ({ id, title, body }) =>  {
    return (
      <tr key={id} data-content={title}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          {id ? (
            <Button
              color='info'
              name='Update'
              clicked={() => {
                props.editRecord(id);
              }}
            >
              Update
            </Button>
          ) : (
            ''
          )}
        </td>
      </tr>
    );
  }

  if (!props.listOfItems.length) {
    noItems = <div><h1 className='no-records'>No Records found</h1></div>;
  } else {
    fetchedItems = props.listOfItems.map(item => showResult(item));
  }

  return (
    <div>
    { noItems !== '' ? noItems :
    (<Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{fetchedItems}</tbody>
    </Table>) }
    </div>
  );
}
searchResults.propTypes = {
  editRecord: PropTypes.func,
  listOfItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};

export default searchResults;