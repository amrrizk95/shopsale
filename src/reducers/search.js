import * as types from "../constants/actionTypes";

let initialState = ""

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT:
            console.log(action)
            return action.keyword;
        default:
            return state;
    }
};

export default myReducer;