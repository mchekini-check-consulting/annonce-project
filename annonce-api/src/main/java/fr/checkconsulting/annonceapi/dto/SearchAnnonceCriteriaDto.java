package fr.checkconsulting.annonceapi.dto;

import fr.checkconsulting.annonceapi.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SearchAnnonceCriteriaDto {
    private Integer minPrice = 0;
    private Integer maxPrice = Integer.MAX_VALUE;
    private String title;
    private LocalDate startDate = null;
    private LocalDate endDate = null;
    private Category category;
    private Integer pageNumber = 0;
    private Integer pageSize = 10;
    private Sort sort;
}
