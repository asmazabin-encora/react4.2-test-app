import { combineReducers } from 'redux';
import { GET_RECORDS, UPDATE_RECORDS } from '../actions';
 
const initialState = {
    listData : [],
    selectedData: ''
};

function getList(state = initialState, action) {
    switch(action.type) {
        case GET_RECORDS:
            return {
                ...state,
                getlistData: action.listData
            }
        case UPDATE_RECORDS:
            let updateData = action.updateData;
            let listData = [...state.getlistData];
            listData[updateData.id - 1] = updateData;
            let modifiedData = { ...state, listData };
            return {
                ...state,
                modifiedData: modifiedData.listData
            }
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