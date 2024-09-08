package fr.checkconsulting.annonceapi.entity;


import fr.checkconsulting.annonceapi.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import static jakarta.persistence.EnumType.STRING;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Annonce {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer annonceId;
    private String title;
    private String description;
    @Enumerated(STRING)
    private Category category;
    private Integer price;
    private String localisation;
    private LocalDate postedAt;
}
