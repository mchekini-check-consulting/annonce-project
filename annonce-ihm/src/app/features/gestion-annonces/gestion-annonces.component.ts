import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {AnnonceModel} from "../../core/model/annonce.model";
import {AnnonceService} from "../../core/service/annonce.service";
import {SearchCriteriaModel} from "../../core/model/search.criteria.model";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatSortModule, Sort} from "@angular/material/sort";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";
import {AnnonceFormComponent} from "../../components/annonce-form/annonce-form.component";

@Component({
  selector: 'app-gestion-annonces',
  standalone: true,
  imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe, JsonPipe,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule, MatDivider, NgForOf, MatIcon],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gestion-annonces.component.html',
  styleUrl: './gestion-annonces.component.css'
})
export class GestionAnnoncesComponent implements OnInit{
  displayedColumns: string[] = ['title', 'description', 'price', 'category', 'Localisation', 'postedAt', 'actions'];
  searchCriteria = new SearchCriteriaModel();
  annonces = new MatTableDataSource<AnnonceModel>();
  categories: string[] = [
    'SPORT',
    'IMMOBILIER',
    'MOBILIER',
    'ELECTRONIQUE',
    'SERVICES',
    'VETEMENTS'
  ];

  constructor(private annonceService: AnnonceService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.annonceService.searchAnnonces(this.searchCriteria).subscribe(response => {
      this.annonces.data = response.content;
    })

  }

  onPageChange(event: PageEvent) {
    this.searchCriteria.pageSize = event.pageSize;
    this.searchCriteria.pageNumber = event.pageIndex;
    this.loadData();
  }

  sortChange(event: Sort) {
    this.searchCriteria.orders = [];
    if (event.direction !== '') {
      this.searchCriteria.orders.push({property: event.active, direction: event.direction});
    }
    this.loadData();
  }

  resetForm(): void {
    let oldPageSize = this.searchCriteria.pageSize;
    this.searchCriteria = new SearchCriteriaModel();
    this.searchCriteria.pageSize = oldPageSize;
    this.loadData();
  }

  searchByCriteria() {
    console.log(this.searchCriteria);
    this.loadData();

  }

  deleteRow(id: number) {
    this.openDeleteAnnonceDialog().afterClosed().subscribe(value => {
      if (value) {
        this.annonceService.deleteAnnonceById(id).subscribe(() => {
          this.loadData();
        });
      }
    })
  }

  openDeleteAnnonceDialog() {
    return this.dialog.open(DeleteDialogComponent, {
      width: '450px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms'
    });
  }


  openCreateAnnonceDialog() {
    this.dialog.open(AnnonceFormComponent, {
      width: '60%',
      // height: '90%'
    });
  }

}





