package se.kth.sda6.skeleton;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import se.kth.sda6.skeleton.toys.Toy;
import se.kth.sda6.skeleton.toys.ToyRepository;

@SpringBootApplication
public class SkeletonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkeletonApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
					.addMapping("/**")
					.allowedOrigins("*")
					.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
			}
		};

	}
	@Bean
	public CommandLineRunner demo(ToyRepository repository) {
		return (args) -> {
			// save a few customers
			repository.save(new Toy("Jack", 19.0));
			repository.save(new Toy("Raf", 1.0));
			repository.save(new Toy("Lilo", 19.8));
			repository.save(new Toy("Poli", 70.75));
			repository.save(new Toy("Kimo", 50.0));
		};
	}

	//User user;
	//Toy toy;
	//toy.setUser(user);

}
