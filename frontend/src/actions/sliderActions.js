import axios from "axios";

import {
    FRONTEND_SLIDER_REQUEST,
    FRONTEND_SLIDER_SUCCESS,
    FRONTEND_SLIDER_FAIL,
    ADMIN_SLIDER_REQUEST, 
    ADMIN_SLIDER_SUCCESS, 
    ADMIN_SLIDER_FAIL, 
    CREATE_SLIDER_REQUEST,
    CREATE_SLIDER_SUCCESS,
    // CREATE_SLIDER_RESET,
    CREATE_SLIDER_FAIL,
    UPDATE_SLIDER_REQUEST,
    UPDATE_SLIDER_SUCCESS,
    // UPDATE_SLIDER_RESET,
    UPDATE_SLIDER_FAIL,
    DELETE_SLIDER_REQUEST,
    DELETE_SLIDER_SUCCESS,
    // DELETE_SLIDER_RESET,
    DELETE_SLIDER_FAIL,
    CLEAR_ERRORS
} from '../constants/sliderConstants';

export const getSlider = () => async(dispatch) => {
    try {

        dispatch({ type: FRONTEND_SLIDER_REQUEST });

        const { data } = await axios.get(`/api/v1/slider`)

        dispatch({
            type: FRONTEND_SLIDER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        
        dispatch({
            type: FRONTEND_SLIDER_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const getAdminSlider = () => async(dispatch) => {
    try {

        dispatch({ type: ADMIN_SLIDER_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/sliders`)

        dispatch({
            type: ADMIN_SLIDER_SUCCESS,
            payload: data.slider
        })
        
    } catch (error) {
        
        dispatch({
            type: ADMIN_SLIDER_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const createSlider = (sliderData) => async(dispatch) => {
    try {

        dispatch({ type:  CREATE_SLIDER_REQUEST});

        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/slider/new`, sliderData, config)

        dispatch({
            type: CREATE_SLIDER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        
        dispatch({
            type: CREATE_SLIDER_FAIL,
            payload: error.response.data.message
        })
        
    }
}

export const deleteSlider = (id) => async(dispatch) => {
    try {

        dispatch({ type:  DELETE_SLIDER_REQUEST});

        // const config = {
        //     headers: {
        //         'Content-Type' : 'application/json'
        //     }
        // }

        const { data } = await axios.delete(`/api/v1/admin/slider/${id}`)

        dispatch({
            type: DELETE_SLIDER_SUCCESS,
            payload: data.success
        })
        
    } catch (error) {
        
        dispatch({
            type: DELETE_SLIDER_FAIL,
            payload: error.response.data.message
        })
        
    }
}


export const updateSlider = (id, sliderData) => async(dispatch) => {
    try {

        dispatch({ type:  UPDATE_SLIDER_REQUEST});

        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/slider/${id}`, sliderData, config)

        dispatch({
            type: UPDATE_SLIDER_SUCCESS,
            payload: data.success
        })
        
    } catch (error) {
        
        dispatch({
            type: UPDATE_SLIDER_FAIL,
            payload: error.response.data.message
        })
        
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
};
