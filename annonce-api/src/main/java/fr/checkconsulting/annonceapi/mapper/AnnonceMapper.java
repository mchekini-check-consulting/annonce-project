package fr.checkconsulting.annonceapi.mapper;

import fr.checkconsulting.annonceapi.dto.AnnonceDto;
import fr.checkconsulting.annonceapi.entity.Annonce;
//import org.mapstruct.Mapper;
//import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Component
//@Mapper(componentModel = "spring")
public class AnnonceMapper {
//    AnnonceMapper INSTANCE = Mappers.getMapper( AnnonceMapper.class );
  public  AnnonceDto toDto(Annonce annonce){
        AnnonceDto annonceDto = new AnnonceDto().builder()
                .annonceId(annonce.getAnnonceId())
                .title(annonce.getTitle())
                .description(annonce.getDescription())
                .price(annonce.getPrice())
                .category(annonce.getCategory())
                .localisation(annonce.getLocalisation())
                .build();

        return annonceDto;
    };
  public  Annonce toEntity(AnnonceDto dto){
        Annonce annonce = new Annonce().builder()
                .annonceId(dto.getAnnonceId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .price(dto.getPrice())
                .category(dto.getCategory())
                .localisation(dto.getLocalisation())
                .build();
        return annonce;
    };
}
