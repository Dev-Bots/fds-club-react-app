import scoutActionTypes from '../../actions/scout/scout.action.types';

const initialState = {
    scouts: [],
    scout: {},
    scoutsLoading: true,
    scoutLoading: true,
    error: null,

}


export default function scoutsReducer(state = initialState, action) {
    // console.log('scoutReducer', action);
    switch (action.type) {
        case scoutActionTypes.SCOUTS_LOADING:
            return {
                ...state,
                scoutsLoading: true,
                error: null
            }
        case scoutActionTypes.SCOUTS_LOADED:
            return {
                ...state,
                scouts: action.payload,
                scoutsLoading: false,
            };

        case scoutActionTypes.SCOUTS_LOADING_ERROR:
            return {
                ...state,
                scoutsLoading: false,
                error: action.payload,
            };