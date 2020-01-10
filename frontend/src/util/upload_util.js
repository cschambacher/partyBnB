import axios from "axios"

export const createPicture = (picture) => {
    return axios.post("/api/upload/image-upload", picture);
}