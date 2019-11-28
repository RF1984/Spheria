package se.kth.sda6.skeleton.tasks;

// @TODO add Hibernate annotations to define which table and columns should be used to save the Post Object.

import se.kth.sda6.skeleton.comments.Comment;
import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "taskList")
public class Task {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "task")
    private String taskName;

    @Column(name = "value")
    private double taskValue;

    @ManyToOne ()
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Task() {
    }

    public Task (String taskName) {
        this.taskName = taskName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTask() {
        return taskName;
    }

    public void setTask(String body) {
        this.taskName = taskName;
    }

    public double getValue() {return taskValue;}

    public void setValue (double taskValue) { this.taskValue = taskValue; }

}

