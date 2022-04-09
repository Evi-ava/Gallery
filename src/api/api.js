import axios from "axios";

const instance = axios.create({
    baseURL: 'http://gallery.dev.webant.ru/',
    accept: 'application/json',
});

export const galleryAPI = {
    getPhotos(page, limit) {
        return instance.get("api/photos?", {
            params: {
                page,
                limit,
            }
        })
        .then(response => response.data);
    }
} 

