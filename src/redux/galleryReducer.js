import { galleryAPI } from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS';
const SET_COUNT_PAGES = 'SET_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    currentItemMenu: 'new',
    currentPage: 1,
    countPages: 10,
    limit: 15, 
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
        case SET_CURRENT_PAGE: {
            return {
                ...state, 
                currentPage: action.pageNumber,
            }
        }
        default: 
            return state;
    }
}

export default galleryReducer;

export const setPhotos = (photos) => ({type : SET_PHOTOS, photos});
export const setCountPages = (countPages) => ({type: SET_COUNT_PAGES, countPages});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});

export const getAllPhotosThunkCreator = (page, limit, currentItemMenu) => {
    return (dispatch) => {
        galleryAPI.getPhotos(page, limit, currentItemMenu)
        .then(response => {
            dispatch(setCurrentPage(page));
            dispatch(setPhotos(response.data));
            dispatch(setCountPages(response.countOfPages));
        })
    }
}

