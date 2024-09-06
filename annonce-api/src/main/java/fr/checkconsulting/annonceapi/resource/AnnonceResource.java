package fr.checkconsulting.annonceapi.resource;


import fr.checkconsulting.annonceapi.entity.Annonce;
import fr.checkconsulting.annonceapi.service.AnnonceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/annonce")

public class AnnonceResource {

    private final AnnonceService annonceService;

    public AnnonceResource(AnnonceService annonceService){
        this.annonceService = annonceService;
    }

    @PostMapping
    public ResponseEntity<Annonce> creatAnnonce(@RequestBody Annonce annonce){
        Annonce savedAnnonce = annonceService.saveAnnonce(annonce);
        return  ResponseEntity.created(URI.create("/api/1/annonce")).body(savedAnnonce);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAnnonceById(@PathVariable Long id) {
        Optional<Annonce> annonce = annonceService.findAnnonceById(id);
        if (annonce.isPresent()) {
            return ResponseEntity.ok().body(annonce);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Annonce>> getAllAnnonces() {
        List<Annonce> annonce = annonceService.findAllAnnonces();
        return ResponseEntity.ok().body(annonce);
    }

    @PutMapping("/{id}")
     public ResponseEntity<?> updateAnnonce(@PathVariable Long id,@RequestBody  Annonce annonce){
        return new ResponseEntity<>(annonceService.updateAnnonce(id, annonce), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnonce(@PathVariable Long id) {
        if (annonceService.findAnnonceById(id).isPresent()) {
            annonceService.deleteAnnonceById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<?> patchAnnonce(@PathVariable Long id, @RequestBody Annonce partialAnnonce) {
        Optional<Annonce> optionalAnnonce = annonceService.findAnnonceById(id);

        if (optionalAnnonce.isPresent()) {
            Annonce updatedAnnonce = annonceService.patchAnnonce(id, partialAnnonce);
            return ResponseEntity.ok(updatedAnnonce);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
