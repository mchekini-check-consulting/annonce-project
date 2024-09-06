package fr.checkconsulting.annonceapi.repository;

import fr.checkconsulting.annonceapi.entity.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnonceRepository extends JpaRepository<Annonce, Integer> {

}
