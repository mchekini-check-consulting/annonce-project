package fr.checkconsulting.annonceapi.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Annonce {

    @Id
    private Long annonceId;
    private String titre;
    private String description;
    private String categorie;
    private BigDecimal prix;
    private String localisation;
    private LocalDate postedAt;

}
