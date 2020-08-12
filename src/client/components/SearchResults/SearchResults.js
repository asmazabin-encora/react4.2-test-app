import React from 'react';
import Button from '../UI/Button/Button';
import { Table } from 'reactstrap';
import './SearchResults.scss';

/**
 * This component will display the searched items
 */
export default function searchResults({ listOfItems, editRecord }) {
  let fetchedItems = [];
  let noItems = '';
  if (!listOfItems.length) {
    noItems = <div><h1 className='no-records'>No Records found</h1></div>;
  } else {
    fetchedItems = listOfItems.map(item => showResult(item));
  }

  function showResult({ id, title, body }) {
    return (
      <tr key={id} data-content={title}>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>
          {id ? (
            <Button
              color='info'
              name='edit'
              clicked={() => {
                editRecord(id);
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
