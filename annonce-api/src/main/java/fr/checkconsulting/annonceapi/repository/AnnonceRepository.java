package fr.checkconsulting.annonceapi.repository;

import fr.checkconsulting.annonceapi.entity.Annonce;
import fr.checkconsulting.annonceapi.enums.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface AnnonceRepository extends PagingAndSortingRepository<Annonce, Integer>, JpaRepository<Annonce, Integer> {

    @Query(""" 
                    SELECT a FROM Annonce a 
                    WHERE (a.price BETWEEN :minPrice AND :maxPrice)
                    AND (a.title ILIKE %:title% OR :title IS NULL)
                    AND (a.category = :category OR :category IS NULL)
                    AND (CAST(:startDate as date) IS NULL OR a.postedAt >= :startDate)
                    AND (CAST(:endDate as date) IS NULL OR a.postedAt <= :endDate)
            """)
    Page<Annonce> searchAnnonce(Integer minPrice,
                                Integer maxPrice,
                                String title,
                                Category category,
                                LocalDate startDate,
                                LocalDate endDate,
                                Pageable pageable
    );
}
