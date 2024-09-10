import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AnnonceModel} from "../../../../core/model/annonce.model";

@Component({
  selector: 'app-annonce-item',
  standalone: true,
  imports: [],
  templateUrl: './annonce-item.component.html',
  styleUrl: './annonce-item.component.css'
})
export class AnnonceItemComponent{
  @Input("annonce") annonce?: AnnonceModel;
  @Output() onTitleClick = new EventEmitter<string>();

  onClick() {
      this.onTitleClick.emit(this.annonce?.title);
  }

  constructor() {


  }



}
