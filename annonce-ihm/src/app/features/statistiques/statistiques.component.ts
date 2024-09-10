import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ChartModule, UIChart} from "primeng/chart";
import {MatCard, MatCardContent} from "@angular/material/card";
import {AnnonceService} from "../../core/service/annonce.service";
import {SearchCriteriaModel} from "../../core/model/search.criteria.model";
import {map} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-statistiques-component',
  standalone: true,
  imports: [
    ChartModule,
    MatCardContent,
    MatCard
  ],
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  dataCategory: any;
  dataDate:any;
  options: any;
  optionsDate:any;

  @ViewChild('chart') chart?: UIChart;

  constructor(private annonceService: AnnonceService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.chartInit();
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.optionsDate={
      plugins: {
        legend: {
          labels: {
            usePointStyle: false,
            color: "--yellow-500"
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

  chartInit(): void {
    this.annonceService.getStatistics().subscribe(result => {

      this.dataCategory = {
        labels: Object.keys(result.byCategory),
        datasets: [
          {
            data: Object.values(result.byCategory),
            backgroundColor: this.getChartColors(),
            hoverBackgroundColor: this.getChartColors()
          }
        ]
      };

      this.dataDate = {
        labels:  Object.keys(result.byDate),
        datasets: [
          {
            label: 'Par jours',
            data:  Object.values(result.byDate),
            fill: false,
            tension: 0.2,
            borderColor: this.getChartColors()[1],
            backgroundColor: this.getChartColors(),
            hoverBackgroundColor: this.getChartColors()
          }
        ]
      };
      this.cdr.detectChanges()
    });
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

