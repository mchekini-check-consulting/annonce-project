package fr.checkconsulting.annonceapi.repository;

import fr.checkconsulting.annonceapi.entity.Annonce;
import org.springframework.data.jpa.repository.JpaRepository;



public interface AnnonceRepository extends JpaRepository<Annonce,Long> {

}
