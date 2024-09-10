import { Component } from '@angular/core';
import {AnnonceItemComponent} from "./components/annonce-item/annonce-item.component";

@Component({
  selector: 'app-annonce-management',
  standalone: true,
  imports: [
    AnnonceItemComponent
  ],
  templateUrl: './annonce-management.component.html',
  styleUrl: './annonce-management.component.css'
})
export class AnnonceManagementComponent {

  displayInformation(message: string) {
    console.log(message);
  }
}
