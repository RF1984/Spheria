package se.kth.sda6.skeleton.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.auth.AuthResponse;
import se.kth.sda6.skeleton.auth.AuthService;

/**
 * Controller method from Spring that handles requests from our web app (front end)
 * Injects dependencies from the User service to the User JPA Repo
 */
@RestController
public class UserController {

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;

    @GetMapping("/users/current")
    public User getCurrentUser(@RequestHeader("authorization") String authHeader) {
        String email = authService.getLoggedInUserEmail(authHeader);
        User user = userService.findUserByEmail(email);
        user.setPassword(null);
        return user;
    }

    @PutMapping("/users/{balance}/set")
    public void updateCurrentUserBalance(@PathVariable int balance, @RequestHeader("authorization") String authHeader){
        String email = authService.getLoggedInUserEmail(authHeader);
        User user = userService.findUserByEmail(email);
        if (balance >= 1) {
            user.setBalance(balance);
            userService.update(user);
        }else throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }
}
