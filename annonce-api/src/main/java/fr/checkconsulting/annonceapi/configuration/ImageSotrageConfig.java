package fr.checkconsulting.annonceapi.configuration;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Configuration
public class ImageSotrageConfig {

        @Value("${app.image.storage.path}")
        private String storagePath;

        @PostConstruct
        public void init() throws IOException {
            Files.createDirectories(Paths.get(storagePath));
        }

}
