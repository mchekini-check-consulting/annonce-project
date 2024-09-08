package fr.checkconsulting.annonceapi.service;

import fr.checkconsulting.annonceapi.dto.SearchAnnonceCriteriaDto;
import fr.checkconsulting.annonceapi.entity.Annonce;
import fr.checkconsulting.annonceapi.exception.ResourceNotFoundException;
import fr.checkconsulting.annonceapi.repository.AnnonceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class AnnonceService {
    private final AnnonceRepository annonceRepository;

    @Autowired
    public AnnonceService(AnnonceRepository annonceRepository) {
        this.annonceRepository = annonceRepository;
    }

    public Annonce saveAnnonce(Annonce annonce) {
        annonce.setPostedAt(LocalDate.now());
        return annonceRepository.save(annonce);
    }

    public Optional<Annonce> findAnnonceById(Integer id) {
        return annonceRepository.findById(id);
    }

    public List<Annonce> findAllAnnonces() {
        return annonceRepository.findAll();
    }

    public void deleteAnnonceById(Integer id) {
        annonceRepository.deleteById(id);
    }

    public Annonce updateAnnonce(Integer id, Annonce annonce) {
        Optional<Annonce> annonceResult = annonceRepository.findById(id);

        if (annonceResult.isPresent()) {
            Annonce existingAnnonce = annonceResult.get();

            existingAnnonce.setTitle(annonce.getTitle());
            existingAnnonce.setDescription(annonce.getDescription());
            existingAnnonce.setPrice(annonce.getPrice());
            existingAnnonce.setCategory(annonce.getCategory());
            existingAnnonce.setPostedAt(annonce.getPostedAt());
            existingAnnonce.setLocalisation(annonce.getLocalisation());

            return annonceRepository.save(existingAnnonce);
        } else {
            throw new ResourceNotFoundException("Annonce non trouvée avec l'id " + id);
        }
    }

    public Annonce patchAnnonce(Integer id, Annonce partialAnnonce) {

        Annonce existingAnnonce = annonceRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Annonce non trouvé"));

        if (partialAnnonce.getTitle() != null) {
            existingAnnonce.setTitle(partialAnnonce.getTitle());
        }
        if (partialAnnonce.getDescription() != null) {
            existingAnnonce.setDescription(partialAnnonce.getDescription());
        }
        if (partialAnnonce.getPrice() != null) {
            existingAnnonce.setPrice(partialAnnonce.getPrice());
        }
        if (partialAnnonce.getCategory() != null) {
            existingAnnonce.setCategory(partialAnnonce.getCategory());
        }
        if (partialAnnonce.getPostedAt() != null) {
            existingAnnonce.setPostedAt(partialAnnonce.getPostedAt());
        }
        if (partialAnnonce.getLocalisation() != null) {
            existingAnnonce.setLocalisation(partialAnnonce.getLocalisation());
        }

        return annonceRepository.save(existingAnnonce);
    }

    public Page<Annonce> searchAnnonce(SearchAnnonceCriteriaDto searchAnnonceCriteriaDto) {

        Sort sort = Sort.by(
                searchAnnonceCriteriaDto.getOrders().stream()
                        .map(order -> new Sort.Order(Sort.Direction.fromString(order.getDirection()), order.getProperty()))
                        .toArray(Sort.Order[]::new)
        );

        Pageable pageable = PageRequest.of(searchAnnonceCriteriaDto.getPageNumber(),
                searchAnnonceCriteriaDto.getPageSize(),
                sort);

        return annonceRepository.searchAnnonce(searchAnnonceCriteriaDto.getMinPrice(),
                searchAnnonceCriteriaDto.getMaxPrice(),
                searchAnnonceCriteriaDto.getTitle(),
                searchAnnonceCriteriaDto.getCategory(),
                searchAnnonceCriteriaDto.getStartDate(),
                searchAnnonceCriteriaDto.getEndDate(), pageable);
    }
}
