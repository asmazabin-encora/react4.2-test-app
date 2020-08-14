import { combineReducers } from 'redux';
import { GET_RECORDS, UPDATE_RECORDS, FETCHING_ERROR } from '../actions';
 
const initialState = {
    listData : [],
    selectedData: '',
    getlistData : []
};

function getList(state = initialState, action) {
    switch(action.type) {
        case GET_RECORDS:
            return {
                ...state,
                getlistData: action.listData
            }

        case UPDATE_RECORDS:
            const updateData = action.updateData;
            let listData = state.getlistData;
            listData[updateData.id - 1] = updateData;
            const modifiedData = { ...state, listData };
            return {
                ...state,
                modifiedData: modifiedData.listData
            }

        case FETCHING_ERROR:
            return action.error;

        default:
            return state;

    }
}

export const listOfRecords = state => state.getList.getlistData;
export const updatedRecord = state => state.getList.modifiedData;

const rootReducer = combineReducers({
    getList,
})

export default rootReducer;