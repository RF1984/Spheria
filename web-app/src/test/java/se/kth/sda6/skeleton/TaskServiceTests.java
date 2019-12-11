package se.kth.sda6.skeleton;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
//import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import se.kth.sda6.skeleton.auth.AuthService;
import se.kth.sda6.skeleton.tasks.Task;
import se.kth.sda6.skeleton.tasks.TaskRepository;
import se.kth.sda6.skeleton.tasks.TaskService;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserService;

import java.util.List;



@SpringBootTest
public class TaskServiceTests {

    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;


    @Test
    public void checkNameAndValueOfTask() {
        // given
        User user = new User("ebra@hotmail.com","asd123","ebra");
        Task task = new Task("task1",100,false,user);

        userService.register(user);
        Task task1 = taskService.create(task);

        String taskName =  task1.getTaskName();
        int taskValue = task1.getTaskValue();
        // when
        String name = null;
        int value = 0;
        List<Task> list = taskService.getAllByUserId(1l);
        for (Task item: list) {
           name = item.getTaskName();
           value = item.getTaskValue();
        }

        // then
        assertEquals(taskName,name);
        assertEquals(taskValue,value);
    }


}
