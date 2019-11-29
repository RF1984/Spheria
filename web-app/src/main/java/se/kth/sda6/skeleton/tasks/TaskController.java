package se.kth.sda6.skeleton.tasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.tasks.Task;
import se.kth.sda6.skeleton.tasks.TaskService;

import java.util.List;

/*
    @TODO AutoWire PostService and create the methods needed to implement the API.
    Don't forget to add necessary annotations.
 */
@RestController
@RequestMapping("/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;
    @GetMapping("")
    public List<Task> getAllTasks(@RequestBody Long userId){
        return taskService.getAllByUserId(userId);
    }

    @GetMapping("/{id}")
    public Task getByID(@PathVariable Long id){
        return taskService.getByID(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping ("")
    public Task create(@RequestBody Task newTask){
        return taskService.create(newTask);
    }
    

    @PutMapping ("")
    public Task update(@RequestBody Task updatedTask){
        return taskService.update(updatedTask);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        taskService.deleteById(id);
    }

}

