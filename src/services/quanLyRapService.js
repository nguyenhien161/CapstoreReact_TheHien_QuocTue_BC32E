import { api } from "../constants/api"

export const quanLyRapServices = {
    getMovieRap: ()=>{
        return api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
    },

    getThongTinRap: ()=>{
        // return api.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01')
    }
}