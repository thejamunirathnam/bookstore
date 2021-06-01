import Axios from './AxiosService'
const axiosservice = new Axios();
const baseUrl = 'https://backend-bookstore.herokuapp.com/'
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

class UserService {
    Registration = (data) => {
        return axiosservice.postMethod(`${baseUrl}bookstore_user/admin/registration`, data,config)
    }
    Login = (data) => {
        return axiosservice.postMethod(`${baseUrl}bookstore_user/admin/login/`, data,config)
    }
    GetBook = (data) => {
        return axiosservice.getMethod(`${baseUrl}bookstore_user​/get​/book/`,config)
    }
    
}

export default UserService;