import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe, JsonPipe,
    FormsModule,
    MatCardModule, MatDivider, NgForOf, MatSidenavContainer, MatNavList, RouterOutlet, MatSidenavModule,
    MatListModule, RouterLink, MatIcon],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {



  constructor() {
  }



}
