import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AnnonceModel } from '../../core/model/annonce.model';
import { AnnonceService } from '../../core/service/annonce.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {  MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe, JsonPipe, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'app-annonce-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
    JsonPipe,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDivider,
    NgForOf,
  ],
  templateUrl: './annonce-form.component.html',
  styleUrl: './annonce-form.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnnonceFormComponent implements OnInit {
  annonceForm!: FormGroup;
  categories: string[] = [
    'SPORT',
    'IMMOBILIER',
    'MOBILIER',
    'ELECTRONIQUE',
    'SERVICES',
    'VETEMENTS',
  ];
  constructor(
    private fb: FormBuilder,
    private annonceService: AnnonceService,
  ) {}

  ngOnInit(): void {
    this.annonceForm = this.fb.group({
      title: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      localisation: ['', Validators.required],
      category: ['', Validators.required],
      postedAt: [null, Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.annonceForm.valid) {
      const model: AnnonceModel = {
        title: this.annonceForm.get('title')?.value,
        description: this.annonceForm.get('description')?.value,
        category: this.annonceForm.get('category')?.value,
        price: this.annonceForm.get('price')?.value,
        localisation: this.annonceForm.get('localisation')?.value,
        postedAt: this.annonceForm.get('postedAt')?.value,
      };
      this.annonceService.createAnnonce(model).subscribe(() => {
        this.resetForm();
      });
    } else {
      console.error('Form is invalid');
    }
  }
  resetForm(): void {
    this.annonceForm.reset();
    Object.keys(this.annonceForm.controls).forEach((key) => {
      const control = this.annonceForm.get(key);
      control?.clearValidators();
      control?.updateValueAndValidity();
    });
  }
}
