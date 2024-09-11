import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnnonceModel} from "../../../../core/model/annonce.model";
import {AnnonceDatabindingService} from "../../../../core/service/annonce-databinding.service";

@Component({
  selector: 'app-annonce-details',
  standalone: true,
  imports: [],
  templateUrl: './annonce-details.component.html',
  styleUrl: './annonce-details.component.css'
})
export class AnnonceDetailsComponent implements OnInit{

  annonce: AnnonceModel | undefined;

  constructor(private annonceDataBindingService:AnnonceDatabindingService) {
  }

  ngOnInit(): void {
  this.annonce = this.annonceDataBindingService.getAnnonce();
    console.log(this.annonce?.title);
  }

}
