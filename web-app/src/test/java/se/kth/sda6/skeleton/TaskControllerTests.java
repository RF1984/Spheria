package se.kth.sda6.skeleton;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import se.kth.sda6.skeleton.auth.AuthService;
import se.kth.sda6.skeleton.tasks.Task;
import se.kth.sda6.skeleton.tasks.TaskService;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserService;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;


@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    @Test
    public void shouldReturnDefaultMessage() throws Exception {
        User user = new User("ebra@hotmail.com","asd123","ebra");
        Task task = new Task("task1",100,false,user);

        userService.register(user);
        Task task1 = taskService.create(task);

        String token = authService.createAuthToken(user.getEmail());

        this.mockMvc.perform(get("/tasks?userId=1").header(HttpHeaders.AUTHORIZATION,"Bearer "+token))
                .andDo(print()).andExpect(status().isOk());

    }
}
