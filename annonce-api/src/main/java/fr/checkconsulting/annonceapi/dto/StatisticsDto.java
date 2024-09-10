package fr.checkconsulting.annonceapi.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;
import java.util.TreeMap;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class StatisticsDto {
   public Map<String,Long> byCategory;
   public TreeMap<String,Long> byDate;
}

