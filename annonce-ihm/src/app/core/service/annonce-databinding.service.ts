import { Injectable } from '@angular/core';
import {AnnonceModel} from "../model/annonce.model";

@Injectable({
  providedIn: 'root'
})
export class AnnonceDatabindingService {

  private annonce:AnnonceModel|undefined;

  constructor() { }

  setAnnonce(annonce : AnnonceModel|undefined):void{
    this.annonce = annonce;
  }

  getAnnonce():AnnonceModel|undefined{
    return this.annonce;
  }
}
