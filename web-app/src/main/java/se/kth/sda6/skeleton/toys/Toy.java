package se.kth.sda6.skeleton.toys;

import se.kth.sda6.skeleton.user.User;

import javax.persistence.*;

@Entity
@Table(name = "toy")
public class Toy {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "toyName")
    private String toyName;

    @Column(name = "toyPrice")
    private double toyPrice;

    @Column(name = "toyPhoto")
    private byte[] toyPhoto;

    //@ManyToOne()
    //private User user;

    public Toy() {
    }

    /*public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }*/

    public Toy(String toyName, double toyPrice, byte[] toyPhoto) {
        this.toyName = toyName;
        this.toyPrice = toyPrice;
        //this.user = user;
        this.toyPhoto = toyPhoto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToy_Name() {
        return toyName;
    }

    public void setToy_Name(String toyName) {
        this.toyName = toyName;
    }

    public double getToy_Price() {
        return toyPrice;
    }

    public void setToy_Price(double toyPrice) {
        this.toyPrice = toyPrice;
    }

    public byte[] getToy_Photo() {
        return toyPhoto;
    }

    public void setToy_Photo(byte[] toyPhoto) {
        this.toyPhoto = toyPhoto;
    }
}

