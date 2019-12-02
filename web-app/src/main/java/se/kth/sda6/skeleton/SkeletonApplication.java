package se.kth.sda6.skeleton;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import se.kth.sda6.skeleton.toys.Toy;
import se.kth.sda6.skeleton.toys.ToyRepository;
import se.kth.sda6.skeleton.toys.ToyService;

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
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST", "PUT", "DELETE",
						"OPTIONS");
			}
		};

	}

	@Bean
	public CommandLineRunner demo(ToyRepository repository) {
		return (args) -> {
			// save a few toys
			repository.save(new Toy("NERF N-Strike Elite Delta Power", 429.0,
					Files.readAllBytes(Paths.get("./toys/images/NERF_N_Strike_Elite_Delta_Power.jpg"))));
			repository.save(new Toy("Monopol: Cheater’s Edition SE", 299.0,
					Files.readAllBytes(Paths.get("./toys/images/Monopoly_Cheaters_Edition_SE.jpg"))));
			repository.save(new Toy("Cruiser 16\" Cykel Gul", 1699.0,
					Files.readAllBytes(Paths.get("./toys/images/Cruiser_16_Cykel_Gul.jpg"))));
			repository.save(new Toy("Colorful Cupcakes Pussel 500 Delar", 199.0,
					Files.readAllBytes(Paths.get("./toys/images/Colorful_Cupcakes_Pussel_500_Delar.jpg"))));
			repository.save(new Toy("Jätte Plockepinn", 199.0, null));
			repository.save(new Toy("LEGO® Star Wars™ Action Battle Hoth™ Generator Attack", 257.0, null));
			repository.save(new Toy("Sparkcykel Classic Big Wheel Vit", 2199.0, null));
			repository.save(new Toy("Fab Lab Face Tattoo Klistertatueringar", 199.0, null));
		};
	}

	// User user;
	// Toy toy;
	// toy.setUser(user);
	
}
