import {
    FRONTEND_SLIDER_REQUEST,
    FRONTEND_SLIDER_SUCCESS,
    FRONTEND_SLIDER_FAIL,
    ADMIN_SLIDER_REQUEST, 
    ADMIN_SLIDER_SUCCESS, 
    ADMIN_SLIDER_FAIL, 
    CREATE_SLIDER_REQUEST,
    CREATE_SLIDER_SUCCESS,
    CREATE_SLIDER_RESET,
    CREATE_SLIDER_FAIL,
    UPDATE_SLIDER_REQUEST,
    UPDATE_SLIDER_SUCCESS,
    UPDATE_SLIDER_RESET,
    UPDATE_SLIDER_FAIL,
    DELETE_SLIDER_REQUEST,
    DELETE_SLIDER_SUCCESS,
    DELETE_SLIDER_RESET,
    DELETE_SLIDER_FAIL,
    CLEAR_ERRORS
} from '../constants/sliderConstants';


export const sliderReducer = (state = { slider: [] }, action) => {
    switch (action.type) {

        case FRONTEND_SLIDER_REQUEST:
        case ADMIN_SLIDER_REQUEST:
            return {
                loading: true,
                slider: []
            }


        case FRONTEND_SLIDER_SUCCESS:
            return {
                loading: false,
                slider: action.payload.slider
            }

        case ADMIN_SLIDER_SUCCESS:
            return {
                loading: false,
                slider: action.payload
            }

        case FRONTEND_SLIDER_FAIL:
        case ADMIN_SLIDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};


export const createSliderReducer = (state = { slider: {} }, action) => {
    switch (action.type) {

        case CREATE_SLIDER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case CREATE_SLIDER_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                slider: action.payload.slider
            }

        case CREATE_SLIDER_RESET:
            return{
                ...state,
                success: false
            }

        case CREATE_SLIDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};


export const deleteSliderReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_SLIDER_REQUEST:
        case UPDATE_SLIDER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case DELETE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_SLIDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_SLIDER_RESET:
            return{
                ...state,
                isDeleted: false
            }

        case UPDATE_SLIDER_RESET:
            return{
                ...state,
                isUpdated: false
            }

        case DELETE_SLIDER_FAIL:
        case UPDATE_SLIDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
};
