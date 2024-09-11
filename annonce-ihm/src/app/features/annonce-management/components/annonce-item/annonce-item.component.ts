import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AnnonceModel} from "../../../../core/model/annonce.model";
import {MatCard, MatCardContent, MatCardFooter, MatCardImage} from "@angular/material/card";
import {CurrencyPipe, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {AnnonceDetailComponent} from "../annonce-detail/annonce-detail.component";

@Component({
  selector: 'app-annonce-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardFooter,
    CurrencyPipe,
    MatButton,
    MatCardImage,
    NgIf,
    AnnonceDetailComponent
  ],
  templateUrl: './annonce-item.component.html',
  styleUrl: './annonce-item.component.css'
})
export class AnnonceItemComponent{
  @Input("annonce") annonce?: AnnonceModel;
  @Output() onTitleClick = new EventEmitter<string>();

  displayDetails = false;

  onClick() {
      this.onTitleClick.emit(this.annonce?.title);
  }


  showDetails() {
    this.displayDetails = true;
  }
}
