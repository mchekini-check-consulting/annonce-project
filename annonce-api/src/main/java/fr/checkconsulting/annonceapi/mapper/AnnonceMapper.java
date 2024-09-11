package fr.checkconsulting.annonceapi.mapper;

import fr.checkconsulting.annonceapi.dto.AnnonceDto;
import fr.checkconsulting.annonceapi.entity.Annonce;

import java.util.Base64;

public class AnnonceMapper {

    public static AnnonceDto toAnnonceDto(Annonce annonce) {
        return AnnonceDto.builder()
                .annonceId(annonce.getAnnonceId())
                .title(annonce.getTitle())
                .description(annonce.getDescription())
                .category(annonce.getCategory())
                .price(annonce.getPrice())
                .localisation(annonce.getLocalisation())
                .postedAt(annonce.getPostedAt())
                .imagebase64("data:image/jpeg;base64," + Base64.getEncoder().encodeToString(annonce.getImage()))
                .build();
    }
}
