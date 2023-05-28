import axios from "axios";
const instance = axios.create({
    baseURL: 'https://reactfront-2023-default-rtdb.firebaseio.com/'
});
export default instance;