import { galleryAPI } from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS';
const SET_COUNT_PAGES = 'SET_COUNT_PAGES';

const initialState = {
    countPages: 0,
    limit: 10, 
    photos: [],
};

const galleryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PHOTOS: {
            return {
                ...state,
                photos: action.photos,
            }
        }
        case SET_COUNT_PAGES: {
            return {
                ...state, 
                countPages: action.countPages,
            }
        }
        default: 
            return state;
    }
}

export default galleryReducer;

export const setPhotos = (photos) => ({type : SET_PHOTOS, photos});
export const setCountPhotos = (countPages) => ({type: SET_COUNT_PAGES, countPages});

export const getAllPhotosThunkCreator = (page, limit) => {
    return (dispatch) => {
        galleryAPI.getPhotos(page, limit)
        .then(response => {
            dispatch(setPhotos(response.data));
            dispatch(setCountPhotos(response.countOfPages));
        })
    }
}

