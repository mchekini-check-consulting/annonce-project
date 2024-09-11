import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnnonceItemComponent} from "./components/annonce-item/annonce-item.component";
import {AnnonceModel} from "../../core/model/annonce.model";
import {AnnonceService} from "../../core/service/annonce.service";
import {SearchCriteriaModel} from "../../core/model/search.criteria.model";
import { CommonModule } from '@angular/common';
import {AnnonceDetailComponent} from "./components/annonce-detail/annonce-detail.component";
@Component({
  selector: 'app-annonce-management',
  standalone: true,
  imports: [
    AnnonceItemComponent,
    CommonModule,
    AnnonceDetailComponent
  ],
  templateUrl: './annonce-management.component.html',
  styleUrl: './annonce-management.component.css'
})
export class AnnonceManagementComponent implements  OnInit{
  searchCriteria = new SearchCriteriaModel();
  annonces!:AnnonceModel[];

  constructor(private annonceService:AnnonceService, private cdr: ChangeDetectorRef ) {
   // this.annonces.push(this.annonceTest);
  }
  ngOnInit():void{
    this.searchCriteria.pageSize = 10;
    this.annonceService.searchAnnonces(this.searchCriteria).subscribe(response => {
      this.annonces = response.content;
      this.cdr.detectChanges();
    });
  }
  itemTitleClick(title:string){
    console.log(`this is the clicked title '${title}'`);
  }

}
