package fr.checkconsulting.annonceapi.resource;

import fr.checkconsulting.annonceapi.entity.Annonce;
import fr.checkconsulting.annonceapi.service.AnnonceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/annonce")
@CrossOrigin
@Tag(name = "Annonces", description = "API qui permet de gérer les annonces")
public class AnnonceResource {

    private final AnnonceService annonceService;

    public AnnonceResource(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    @Operation(summary = "Créer une nouvelle annonce", description = "Ajoute une nouvelle annonce à la base de données.")
    @PostMapping
    public ResponseEntity<Annonce> createAnnonce(
            @Parameter(description = "L'annonce à ajouter, doit être envoyée au format JSON", required = true)
            @RequestBody Annonce annonce) {
        Annonce savedAnnonce = annonceService.saveAnnonce(annonce);
        return ResponseEntity.created(URI.create("/api/v1/annonce/" + savedAnnonce.getAnnonceId()))
                .body(savedAnnonce);
    }

    @Operation(summary = "Obtenir une annonce par ID", description = "Récupère une annonce en fonction de son ID.")
    @GetMapping("/{id}")
    public ResponseEntity<?> getAnnonceById(
            @Parameter(description = "ID de l'annonce à récupérer", required = true, example = "1")
            @PathVariable Integer id) {
        Optional<Annonce> annonce = annonceService.findAnnonceById(id);
        if (annonce.isPresent()) {
            return ResponseEntity.ok().body(annonce);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Lister toutes les annonces", description = "Retourne une liste complète de toutes les annonces disponibles.")
    @GetMapping
    public ResponseEntity<List<Annonce>> getAllAnnonces() {
        return ResponseEntity.ok().body(annonceService.findAllAnnonces());
    }

    @Operation(summary = "Mettre à jour une annonce par ID", description = "Met à jour une annonce existante en fonction de son ID.")
    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnnonceById(
            @Parameter(description = "ID de l'annonce à mettre à jour", required = true, example = "1")
            @PathVariable Integer id,
            @Parameter(description = "L'annonce mise à jour, doit être envoyée au format JSON", required = true)
            @RequestBody Annonce annonce) {
        return new ResponseEntity<>(annonceService.updateAnnonce(id, annonce), HttpStatus.OK);
    }

    @Operation(summary = "Supprimer une annonce par ID", description = "Supprime une annonce de la base de données en fonction de son ID.")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnonce(
            @Parameter(description = "ID de l'annonce à supprimer", required = true, example = "1")
            @PathVariable Integer id) {
        if (annonceService.findAnnonceById(id).isPresent()) {
            annonceService.deleteAnnonceById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Modifier partiellement une annonce par ID", description = "Met à jour partiellement une annonce en fonction de son ID.")
    @PatchMapping("/{id}")
    public ResponseEntity<?> patchAnnonce(
            @Parameter(description = "ID de l'annonce à modifier", required = true, example = "1")
            @PathVariable Integer id,
            @Parameter(description = "Les parties de l'annonce à modifier, envoyées au format JSON", required = true)
            @RequestBody Annonce partialAnnonce) {
        Optional<Annonce> optionalAnnonce = annonceService.findAnnonceById(id);

        if (optionalAnnonce.isPresent()) {
            Annonce updatedAnnonce = annonceService.patchAnnonce(id, partialAnnonce);
            return ResponseEntity.ok(updatedAnnonce);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
