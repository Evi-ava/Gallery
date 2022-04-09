import axios from "axios";

export const getAllPhotos = () => {
    return axios.get("http://gallery.dev.webant.ru/api/clients", {
        headers: {
            accept: 'application/json',
            // Authorization: "Bearer 123",
        }
    });
}