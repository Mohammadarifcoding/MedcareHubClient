import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://medicinehub.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
}

export default UseAxiosPublic;