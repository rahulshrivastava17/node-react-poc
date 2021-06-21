import axios from 'axios';
import { setAlert } from './alert';
import {getUrl} from '../utils/setAuthToken';

import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_ERROR,
    UPDATE_PROFILE,
    CLEAR_PROFILE,
    ACCOUNT_DELETEED,
    GET_REPOS
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try{
        const url = getUrl(`profile/me`);
        const res = await axios.get(url);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
    });
    }catch (err) {
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response, status: err.response}
    });
}
};

 // Get All Profiles
 export const getProfiles = () => async dispatch => {
     dispatch({type: CLEAR_PROFILE});
    try{
        const url = getUrl(`profile`);
        const res = await axios.get(url);
        dispatch({
            type: GET_PROFILES,
            payload: res.data
    });
    }catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response, status: err.response}
        });
    }
};

// Get All Profile by Id
export const getProfileById = userId => async dispatch => {
   try{
        const url = getUrl(`profile/user/${userId}`);
        const res = await axios.get(url);
        dispatch({
           type: GET_PROFILE,
           payload: res.data
        });
   }catch (err) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response, status: err.response}
        });
    }
};

// Get Github repos
export const getGithubRepos = username => async dispatch => {
   try{
        const url = getUrl(`profile/github/${username}`);
        const res = await axios.get(url);
        dispatch({
           type: GET_REPOS,
           payload: res.data
        });
   }  catch (err) {
    //    dispatch({
    //        type: PROFILE_ERROR,
    //        payload: { msg: err.response, status: err.response}
    //    });
   }
};

// Create or update profile
export const createProfile = (formData, history, edit=false)=> async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const url = getUrl(`profile`);
        const res = await axios.post(url, formData, config);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert(edit? 'Profile Updated' : 'Profile Created','success'));
        if(!edit){
            history.push('/dashboard');
        }

    }catch(err){
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => { 
                dispatch(setAlert(error.msg, 'danger'))
            });
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add experience
export const addExperience = (formData, history) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const url = getUrl(`profile/experience`);
        const res = await axios.put(url, formData, config);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Experience added','success'));
        history.push('/dashboard');

    } catch(err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => { 
                dispatch(setAlert(error.msg, 'danger'))
            });
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Add Education
export const addEducation = (formData, history) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const url = getUrl(`profile/education`);
        const res = await axios.put(url, formData, config);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Education added','success'));
        history.push('/dashboard');

    } catch(err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => { 
                dispatch(setAlert(error.msg, 'danger'))
            });
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete experience
export const deleteExperience = id => async dispatch =>{
    try{
        const url = getUrl(`profile/experience/${id}`);
        const res = await axios.delete(url);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Experience removed', 'success'));
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        });
    }
};

// Delete education
export const deleteEducation = id => async dispatch => {
    try{
        const url = getUrl(`profile/education/${id}`);
        const res = await axios.delete(url);
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Education removed', 'success'));
    }catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg:err.response.statusText, status: err.response.status}
        });
    }
}

// Delete account & profile
export const deleteAccount = () => async dispatch => {
    if(window.confirm('Are you sure? Tjhis can not be undone')){
        try{
           const url = getUrl(`profile`);
           await axios.delete(url);
            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETEED});
            dispatch(setAlert('Your account has been permanently deleted', 'success'));
        }catch(err){
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg:err.response.statusText, status: err.response.status}
            });
        }
    }
}