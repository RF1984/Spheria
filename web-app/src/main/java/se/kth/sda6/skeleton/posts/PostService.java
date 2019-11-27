package se.kth.sda6.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/*
    @TODO Autowire the PostRepository and use it to implement all the service methods.
 */
@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAll() {
        // @TODO get all posts and return them as List<Post>
        return postRepository.findAll();
    }

    public Optional<Post> getByID(Long id) {
        // @TODO get a post by ID if it exists
        return postRepository.findById(id);
    }

    public Post create(Post newPost) {
        // @TODO save the post to DB and return the saved post
        return postRepository.save(newPost);
    }

    public Post update(Post updatedPost) {
        // @TODO update the post if it exists in DB and return the updated post.
        return postRepository.save(updatedPost);
    }

    public void deleteById(Long id) {
        // @TODO delete the post by id
         postRepository.deleteById(id);
    }
}
