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
    getCartItems(url) {
        console.log(headerConfig)
        return axiosService.Get(url, headerConfig);
    }
    CartItemQuantity(url,data){
        return axiosService.Put(url,data, headerConfig);
    }
    RemoveItemFromCart(url){
        return axiosService.Delete(url, headerConfig);
    }
    CustomerDetailsEdit(url,data){
        return axiosService.Put(url,data, headerConfig);
    }
    takeOrder(url,data) {
        return axiosService.Post(url,data,headerConfig);
    }

   }

export default UserService;