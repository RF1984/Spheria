package se.kth.sda6.skeleton.tasks;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring repository interface for Tasks.
 * Allow us to access the methods in JPA Repository
 */

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    //
    List<Task> findAllByUserId (long userId);

}

