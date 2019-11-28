package se.kth.sda6.skeleton.toys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda6.skeleton.user.UserService;

import java.util.List;

@RestController
@RequestMapping("/toys")
public class ToyController {

    @Autowired
    private ToyService toyService;

    @GetMapping("")
    public List<Toy> getAllToys(){
        return toyService.getAll();
    }

    @GetMapping("/{id}")
    public Toy getByID(@PathVariable Long id){
        return toyService.getByID(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("")
    public Toy create(@RequestBody Toy newToy){
        return toyService.create(newToy);
    }

    @PutMapping("")
    public Toy update(@RequestBody Toy updatedToy){
        return toyService.update(updatedToy);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id){
        toyService.deleteById(id);
    }




}
