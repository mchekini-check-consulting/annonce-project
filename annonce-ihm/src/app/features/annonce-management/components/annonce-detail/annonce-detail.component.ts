import {Component, Input} from '@angular/core';
import {AnnonceModel} from "../../../../core/model/annonce.model";
import {MatCard, MatCardImage} from "@angular/material/card";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-annonce-detail',
  standalone: true,
  imports: [
    MatCard,
    CurrencyPipe,
    MatCardImage,
    MatButton,
    MatIcon,
    NgForOf
  ],
  templateUrl: './annonce-detail.component.html',
  styleUrl: './annonce-detail.component.css'
})
export class AnnonceDetailComponent {

  @Input('annonce') inputAnnonce? : AnnonceModel;

  annonce = {

    rooms: 5,
    area: 90,
    pricePerSqm: 6111,
    thumbnailImages: [
      "saint-maur.jpg",
      "saint-maur-2.jpg",
      "saint-maur-3.jpg"
    ],
    agency: {
      name: "INSTANTIMMO",
      logo: "logo-agence.jpeg",
      reviewsCount: 223,
      type: "Pro",
      listingsCount: 150
    }
  };


  changeMainImage(image: string) {
    if (this.inputAnnonce !== undefined ) this.inputAnnonce.imagebase64 = image;
  }

}
