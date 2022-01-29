import axios from "axios";


// request interceptor
axios.interceptors.request.use(function (request) {
   try{
    if (request.url.includes("cart")) {
        request.headers.token = localStorage.getItem("token")
    } else if (request.url.includes("add")) {
        request.headers.token = localStorage.getItem("token")
    } else if (request.url.includes("wishlist")) {
        request.headers.token = localStorage.getItem("token")
    }
    console.log(request)
    return request;
   }
   catch(error){
     console.log(error)
   }
});

// response interceptor
axios.interceptors.response.use(function (response) {

    console.log(response)
    return response;
},
    function (error) {
        
            return Promise.reject(error);
});