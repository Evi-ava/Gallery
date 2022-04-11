import axios from "axios";

const instance = axios.create({
    baseURL: 'http://gallery.dev.webant.ru/',
    accept: 'application/json',
});

window.instance = instance;

// const authorization = () => {
    
//     return instance.post("api/clients", {
//         name: 'Evi-ava',
//         allowedGrantTypes: {
//             password: "1234567",
//             "refresh_token": "",
//         }
//     })
//     .then(response => {
//         localStorage.setItem("client", JSON.stringify(response.data))
//         return response.data;
//     }, 
//     error => {
        
//     })
//     .then(data => {
//         return instance.post(`oauth/v2/token`, {
            
//                 client_id: data.id + '_' + data.randomId,
//                 grant_type: 'password',
//                 password: data.allowedGrantTypes.password,
//                 username: data.name,
//                 refresh_token: data.allowedGrantTypes.refresh_token,
//                 client_secret: data.secret,
            
//         }, 
//         {})
//     })
//     .then(response => {
//         debugger;
//     })
// }

// authorization();

export const galleryAPI = {
    getPhotos(page = 1, limit = 15, currentItemMenu = 'new') {
        return instance.get("api/photos?", {
            params: {
                page,
                limit,
                [currentItemMenu]: true,
            }
        })
        .then(response => response.data);
    }
} 

