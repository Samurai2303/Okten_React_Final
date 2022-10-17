import {axiosInstance} from "./axios.service";

let genresService = {
    getAll: () => axiosInstance('/genre/movie/list')
};

export {genresService};