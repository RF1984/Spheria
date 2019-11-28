package se.kth.sda6.skeleton.tasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/*
    @TODO Autowire the PostRepository and use it to implement all the service methods.
 */
@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAll() {
        // @TODO get all posts and return them as List<Post>
        return taskRepository.findAll();
    }

    public Optional<Task> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return taskRepository.findById(id);
    }

    public Task create(Task newTask) {
        // @TODO save the post to DB and return the saved post
        return taskRepository.save(newTask);
    }

    public Task update(Task updatedTask) {
        // @TODO update the post if it exists in DB and return the updated post.
        return taskRepository.save(updatedTask);
    }

    public void deleteById(Long id) {
        // @TODO delete the post by id
        taskRepository.deleteById(id);
    }
}
