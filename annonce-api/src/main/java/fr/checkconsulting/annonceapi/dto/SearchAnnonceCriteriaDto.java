package fr.checkconsulting.annonceapi.dto;

import fr.checkconsulting.annonceapi.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SearchAnnonceCriteriaDto {
    private Integer minPrice = 0;
    private Integer maxPrice = Integer.MAX_VALUE;
    private String title;
    private LocalDate startDate;
    private LocalDate endDate;
    private Category category;
    private Integer pageNumber = 0;
    private Integer pageSize = 10;
    private List<OrderDto> orders = List.of(OrderDto.builder().property("postedAt").direction("DESC").build());
}
