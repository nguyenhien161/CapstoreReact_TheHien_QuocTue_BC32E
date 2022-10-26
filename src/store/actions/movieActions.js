import axios from 'axios'
import { GET_BANNERLIST, GET_MOVIEBYID, GET_MOVIELIST, GET_MOVIERAP, GET_THONGTINRAP, } from "../types/movieType"

export const movieActions = {
    getMovieList: () => {
        return async (dispatch) => {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
                headers: {
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                },
            })

            dispatch({
                type: GET_MOVIELIST,
                payload: result.data.content,
            })
        }
    },

    getBannerList: () => {
        return async (dispatch) => {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
                method: 'GET',
                headers: {
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                },
            })

            dispatch({
                type: GET_BANNERLIST,
                payload: result.data.content,
            })
        }
    },

    getMovieRap: () => {
        return async (dispatch) => {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
                method: 'GET',
                headers: {
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                },
            })

            dispatch({
                type: GET_MOVIERAP,
                payload: result.data.content,
            })
        }
    },

    getThongTinRap: () => {
        return async (dispatch) => {
            const result = await axios({
                url: 'http://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
                method: 'GET',
                headers: {
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                },
            })

            dispatch({
                type: GET_THONGTINRAP,
                payload: result.data.content,
            })
        }
    },

    getMovieById: (movieId) => {
        return async (dispatch) => {
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
                method: 'GET',
                headers: {
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY',
                },
            })

            dispatch({
                type: GET_MOVIEBYID,
                payload: result.data.content,
            })
        }
    }
}
