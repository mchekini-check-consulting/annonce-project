import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AnnonceModel} from "../model/annonce.model";
import {Page} from "../model/page.model";
import {SearchCriteriaModel} from "../model/search.criteria.model";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) {
  }

  searchAnnonces(body : SearchCriteriaModel) : Observable<Page<AnnonceModel>> {
     return this.http.post<Page<AnnonceModel>>('http://52.23.192.75:8080/api/v1/annonce/search', body);
  }
}
