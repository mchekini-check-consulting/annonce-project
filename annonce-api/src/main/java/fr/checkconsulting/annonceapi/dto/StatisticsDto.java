package fr.checkconsulting.annonceapi.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;
import java.util.SortedMap;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StatisticsDto {
   private Map<String,Long> byCategory;
   private SortedMap<String,Long> byDate;
}

