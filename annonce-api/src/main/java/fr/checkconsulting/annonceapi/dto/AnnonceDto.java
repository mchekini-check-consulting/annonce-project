package fr.checkconsulting.annonceapi.dto;

import fr.checkconsulting.annonceapi.enums.Category;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AnnonceDto {

    private Integer annonceId;
    private String title;
    private String description;
    private Category category;
    private Integer price;
    private String localisation;
    private LocalDate postedAt;
    private String imagebase64;
}
