import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'https://medcarehubendgame.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
}

export default UseAxiosPublic;