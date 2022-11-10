import axios from "axios"
// import { BASE_URL } from "../constants/urls"

export async function form(data) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://backend.web3tkmce.tech/register',
            headers: { "Content-Type": "multipart/form-data" },
            data

        })

        return {
            status: response.status,
            response: response.data
        }
    } catch (e) {
        return {
            status: e.response ? e.response.status : e.status,
            errMssg: e.response.data
        }
    }
}