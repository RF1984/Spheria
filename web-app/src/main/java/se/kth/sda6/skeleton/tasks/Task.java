package se.kth.sda6.skeleton.tasks;

import se.kth.sda6.skeleton.user.User;
import javax.persistence.*;

/**
 *  Class to create Task objects, with hibernate notations so it will be converted into a table.
 *  includes getters and setters
 **/
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
    private int taskValue;

    @Column(name = "done")
    private boolean isDone;

    @ManyToOne()
    private User user;

    public Task() {
        this.isDone = false;
    }

    public Task(String taskName, int taskValue, boolean isDone, User user) {
        this.taskName = taskName;
        this.taskValue = taskValue;
        this.isDone = false;
        this.user = user;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public int getTaskValue() {
        return taskValue;
    }

    public void setTaskValue(int taskValue) {
        this.taskValue = taskValue;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }
}

