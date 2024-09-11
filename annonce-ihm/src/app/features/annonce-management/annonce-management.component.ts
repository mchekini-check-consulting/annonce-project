import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnnonceItemComponent} from "./components/annonce-item/annonce-item.component";
import {AnnonceModel} from "../../core/model/annonce.model";
import {AnnonceService} from "../../core/service/annonce.service";
import {SearchCriteriaModel} from "../../core/model/search.criteria.model";
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
import {AnnonceDatabindingService} from "../../core/service/annonce-databinding.service";
@Component({
  selector: 'app-annonce-management',
  standalone: true,
  imports: [
    AnnonceItemComponent,
    CommonModule
  ],
  templateUrl: './annonce-management.component.html',
  styleUrl: './annonce-management.component.css'
})
export class AnnonceManagementComponent implements  OnInit{
  searchCriteria = new SearchCriteriaModel();
  annonces!:AnnonceModel[];
  selectedAnnonce:AnnonceModel|undefined;

  constructor(private annonceService:AnnonceService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private annonceDatabindingService: AnnonceDatabindingService,) {
  }
  ngOnInit():void{
    this.searchCriteria.pageSize = 10;
    this.annonceService.searchAnnonces(this.searchCriteria).subscribe(response => {
      this.annonces = response.content;
      this.cdr.detectChanges();
    });
  }
  itemTitleClick(annonce_id:number){
    this.selectedAnnonce=this.annonces.find(annonce => annonce.annonceId === annonce_id);
    this.annonceDatabindingService.setAnnonce(this.selectedAnnonce);
    this.router.navigate(['/annonce-details']);

  }

}
