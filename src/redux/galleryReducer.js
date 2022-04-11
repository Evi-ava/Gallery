import { galleryAPI } from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS';
const SET_COUNT_PAGES = 'SET_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_ITEM_MENU = 'SET_CURRENT_ITEM_MENU';
const CHANGE_LOADING = 'CHANGE_LOADING';

const initialState = {
    currentItemMenu: 'new',
    currentPage: 1,
    countPages: 10,
    limit: 15, 
    photos: [],
    loading: false,
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
            debugger
            return {
                ...state, 
                currentPage: action.pageNumber,
            }
        }
        case SET_CURRENT_ITEM_MENU: {
            return {
                ...state, 
                currentItemMenu: action.itemMenu,
            }
        }
        case CHANGE_LOADING: {
            return {
                ...state, 
                loading: action.status,
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
export const setCurrentItemMenu = (itemMenu) => ({type: SET_CURRENT_ITEM_MENU, itemMenu})
export const changeLoading = (status) => ({type: CHANGE_LOADING, status})

export const getAllPhotosThunkCreator = (page, limit, currentItemMenu) => {
    return (dispatch) => {
        dispatch(changeLoading(true));
        
        galleryAPI.getPhotos(page, limit, currentItemMenu)
        .then(response => {
            dispatch(setCurrentItemMenu(currentItemMenu));
            dispatch(changeLoading(false));
            dispatch(setCurrentPage(page));
            dispatch(setPhotos(response.data));
            dispatch(setCountPages(response.countOfPages));
        })
    }
}

