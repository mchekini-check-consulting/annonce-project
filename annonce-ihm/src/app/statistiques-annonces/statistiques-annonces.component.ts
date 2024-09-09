import { Component, OnInit } from '@angular/core';
import { ChartModule } from "primeng/chart";
import { MatCard, MatCardContent } from "@angular/material/card";
import { AnnonceService } from "../core/service/annonce.service";
import { SearchCriteriaModel } from "../core/model/search.criteria.model";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-statistiques-annonces',
  standalone: true,
  imports: [
    ChartModule,
    MatCardContent,
    MatCard
  ],
  templateUrl: './statistiques-annonces.component.html',
  styleUrls: ['./statistiques-annonces.component.css']
})
export class StatistiquesAnnoncesComponent implements OnInit {
  dataCategory: any;
  dataDate:any;
  options: any;
  optionsDate:any;
  searchCriteria = new SearchCriteriaModel();

  categories: string[] = [];
  values: number[] = [];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit(): void {
    this.chartByCategoryInit();
    this.chartByDateInit();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.optionsDate={
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    }
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

  chartByCategoryInit(): void {
    this.annonceService.searchAnnonces(this.searchCriteria).pipe(
      map(annonces => {
        const categoryCounts = annonces.content.reduce((acc: any, annonce) => {
          const { category } = annonce;
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {}
        );

        return Object.keys(categoryCounts).map(category => ({
          categoryName: category,
          total: categoryCounts[category]
        }));

      })
    ).subscribe(result => {
      this.categories = result.map(item => item.categoryName);
      this.values = result.map(item => item.total);

      this.dataCategory = {
        labels: this.categories,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.getChartColors(),
            hoverBackgroundColor: this.getChartColors()
          }
        ]
      };

    });
  }

  chartByDateInit(): void {
    this.annonceService.searchAnnonces(this.searchCriteria).pipe(
      map(annonces => {
      annonces.content.sort((a, b) => this.convertStringToDateAngular(a.postedAt).getTime() - this.convertStringToDateAngular(b.postedAt).getTime());
        const dateCounts = annonces.content.reduce((acc: any, annonce) => {
          const { postedAt } = annonce;
          const dateString =  postedAt;
          acc[dateString] = (acc[dateString] || 0) + 1;
          return acc;
        }, {});

        return Object.keys(dateCounts).map(dateString => ({
          dateString,
          total: dateCounts[dateString]
        }));
      })
    ).subscribe(result => {
      this.dataDate = result.map(item => item.dateString);
      this.values = result.map(item => item.total);
      console.log(result);

      this.dataDate = {
        labels: this.dataDate,
        datasets: [
          {
            data: this.values,
            backgroundColor: this.getChartColors(),
            hoverBackgroundColor: this.getChartColors()
          }
        ]
      };
    });
  }

  convertStringToDateAngular(dateString: string): Date {
    const [year, month, day] = dateString.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  getChartColors(): string[] {
    const documentStyle = getComputedStyle(document.documentElement);
    return [
      documentStyle.getPropertyValue('--blue-500'),
      documentStyle.getPropertyValue('--yellow-500'),
      documentStyle.getPropertyValue('--green-500'),
      documentStyle.getPropertyValue('--red-500'),
      documentStyle.getPropertyValue('--orange-500'),
      documentStyle.getPropertyValue('--purple-500')
    ];
  }
}
