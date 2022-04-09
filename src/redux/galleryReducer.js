import { galleryAPI } from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS';

const initialState = {
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
        default: 
            return state;
    }
}

export default galleryReducer;

export const setPhotos = (photos) => ({type : SET_PHOTOS, photos});

export const getAllPhotosThunkCreator = () => (dispatch) => {
    galleryAPI.getPhotos(8, 15)
    .then(response => {
        dispatch(setPhotos(response.data));
    })
}
