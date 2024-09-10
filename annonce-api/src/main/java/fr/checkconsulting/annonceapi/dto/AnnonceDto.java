package fr.checkconsulting.annonceapi.dto;

import fr.checkconsulting.annonceapi.enums.Category;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;
import java.time.LocalDate;

import static jakarta.persistence.EnumType.STRING;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AnnonceDto {
    private Integer annonceId;
    private String title;
    private String description;
    private LocalDate postedAt;
    private Integer price;
    @Enumerated(STRING)
    private Category category;
    private String localisation;
}
