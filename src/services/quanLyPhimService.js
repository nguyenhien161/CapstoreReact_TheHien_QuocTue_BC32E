import { api } from "../constants/api"

export const quanLyPhimServices = {
    getMovieList: () => {
        return api.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
    },
    getBannerList: ()=>{
        return api.get('QuanLyPhim/LayDanhSachBanner')
    },
    getMovieById: (movieId) => {
        return api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`)
    },
}