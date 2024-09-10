import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnnonceModel} from "../model/annonce.model";
import {Page} from "../model/page.model";
import {SearchCriteriaModel} from "../model/search.criteria.model";
import {StatisticsDto} from "../model/statistics.model";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) {
  }

  searchAnnonces(body : SearchCriteriaModel) : Observable<Page<AnnonceModel>> {
     return this.http.post<Page<AnnonceModel>>('http://52.23.192.75:8080/api/v1/annonce/search', body);
  }

  deleteAnnonceById(id: number): Observable<void> {
    return this.http.delete<void>('http://52.23.192.75:8080/api/v1/annonce/' + id);
  }

  createAnnonce(body: AnnonceModel): Observable<AnnonceModel> {
    return this.http.post<AnnonceModel>('http://52.23.192.75:8080/api/v1/annonce', body);
  }

  getStatistics():Observable<StatisticsDto>{
      return this.http.get<StatisticsDto>("http://52.23.192.75:8080/api/v1/annonce/statistics");
  }
}
