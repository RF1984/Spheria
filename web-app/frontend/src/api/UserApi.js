import Api from "./Api";

class UserApi {


    getCurrentUser () {
        return Api.get('/users/current');
    }


}

export default new UserApi();