import axios from "axios";

const API_URL = "/user/"

const register = async (userData: any) => {
    const response = await axios.post(API_URL, userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}

const logout = async () => {
 localStorage.removeItem('user')
}

const login = async (userData:any) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}

const authService = {
    register,
    logout,
    login
}

export default authService

