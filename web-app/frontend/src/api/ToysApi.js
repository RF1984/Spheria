import Api from "./Api";
class ToysApi {
    getAllToys() {
        return Api.get('/toys');
    }
    getToyByName(name) {
        return Api.get('/toys?name='+name);
    }
    getToyById(id) {
        return Api.get('/toys/'+id);
    }
    createPost(toy) {
        return Api.post('/toys', toy);
    }
    updateToy(toy) {
        return Api.put('/toys', toy);
    }
    deleteToy(id) {
        return Api.delete('/toys/'+id);
    }
}

export default new ToysApi();