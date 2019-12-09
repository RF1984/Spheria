import Api from "./Api";

class TasksApi {
    getAllTasks() {
        return Api.get('/tasks');
    }

    getTasksByUserId(id) {
        return Api.get('/tasks?userId='+id);
    }

    createTask(task) {
        return Api.post('/tasks', task);

    }

    updateTask(task) {
        return Api.put('/tasks', task);
    }

    deleteTask(id) {
        return Api.delete('/tasks/'+id);
    }
}

export default new TasksApi();