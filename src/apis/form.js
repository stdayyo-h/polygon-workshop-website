import axios from "axios"
// import { BASE_URL } from "../constants/urls"

export async function form(data) {
    try {
        const response = await axios({
            method: 'post',
            url: 'https://backendoxcite.codingclubtkmce.tech/register',
            headers: { "Content-Type": "application/json" },
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