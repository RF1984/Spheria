package se.kth.sda6.skeleton.toys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.auth.AuthService;
import se.kth.sda6.skeleton.user.User;
import se.kth.sda6.skeleton.user.UserService;

import java.util.List;

/**
 * Controller method from Spring that handles requests from our web app (front end)
 * Injects dependencies from the Toy service to the Toy JPA Repo
 */
@RestController
@RequestMapping("/toys")
public class ToyController {

    @Autowired
    private ToyService toyService;

    @Autowired
    private AuthService authService;

    @Autowired
    private UserService userService;


    @GetMapping("")
    public List<Toy> getAllToys(@RequestParam(required = false) String name) {
        if (name != null) {
            return toyService.getByName(name);
        }
        return toyService.getAll();
    }

    @GetMapping("/{id}")
    public Toy getByID(@PathVariable Long id) {
        return toyService.getByID(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Toy create(@RequestBody Toy newToy) {
        return toyService.create(newToy);
    }

    @PutMapping("")
    public Toy update(@RequestBody Toy updatedToy) {
        return toyService.update(updatedToy);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        toyService.deleteById(id);
    }

    @PostMapping("/{id}/buy")
    public String updateUserBalance(@PathVariable Long id, @RequestHeader("authorization") String authHeader) {
        String email = authService.getLoggedInUserEmail(authHeader);
        User user = userService.findUserByEmail(email);
        Toy toy = toyService.getByID(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (user.getBalance() >= toy.getToy_Price()) {

            int newBalance = user.getBalance() - toy.getToy_Price();
            user.setBalance(newBalance);
            userService.update(user);
            return "Ok";
        } else throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
    }
}
