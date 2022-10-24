import { api } from "../constants/api"

export const quanLyPhimServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP13')
    },

    getMovieById: (movieId) => {
        return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    },
    
    demoPost: (data)=>{
        return api.post('url', data)
    }
}