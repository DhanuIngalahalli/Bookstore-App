import AxiosService from "./AxiosService";

const headerConfig = {
    headers: { 
        "x-access-token": localStorage.getItem("token")
     }
}

const axiosService = new AxiosService();

class UserService {

    Registration(url, data) {
        return axiosService.Post(url, data);
    }
    Login(url, data) {
        return axiosService.Post(url, data);
    }
    getBooks(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
    addToCart(url) {
        console.log(headerConfig)
        return axiosService.Post(url,{},headerConfig);
    }
   
    

}

export default UserService;