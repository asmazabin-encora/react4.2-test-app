export const FETCH_ALL_RECORDS = 'FETCH_ALL_RECORDS';
export const GET_RECORDS = 'GET_RECORDS';
export const UPDATE_RECORDS = 'UPDATE_RECORDS';
export const SET_UPDATE_DATA = 'SET_UPDATE_DATA';

export const fetchAllRecords = () => {
  return {
    type: FETCH_ALL_RECORDS
  };
};

export const recordFetched = listData => {
  return {
    type: GET_RECORDS,
    listData
  };
};

export const recordUpdated = updateData => {
  return {
    type: UPDATE_RECORDS,
    updateData
  };
};

export const setUpdateData = () => {
  return {
    type: SET_UPDATE_DATA
  };
};
