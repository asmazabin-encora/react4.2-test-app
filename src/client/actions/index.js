export const FETCH_ALL_RECORDS = 'FETCH_ALL_RECORDS';
export const GET_RECORDS = 'GET_RECORDS';
export const UPDATE_RECORDS = 'UPDATE_RECORDS';
export const SET_UPDATE_DATA = 'SET_UPDATE_DATA';
export const FETCHING_ERROR = 'FETCHING_ERROR';

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

export const fetchingError = error => {
  return {
    type: FETCHING_ERROR,
    error
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
