package se.kth.sda6.skeleton.toys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda6.skeleton.user.User;

import java.util.List;

@Repository
public interface ToyRepository extends JpaRepository<Toy, Long> {
  //  List<Toy> findAllByUserId(Long userId);
}
