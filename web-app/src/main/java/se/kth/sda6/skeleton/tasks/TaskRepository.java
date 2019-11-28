package se.kth.sda6.skeleton.tasks;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
    @TODO extend the appropriate JpaRepository to get common database operations for Post
    Add also the correct annotation to describe the Repository.
 */

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}

