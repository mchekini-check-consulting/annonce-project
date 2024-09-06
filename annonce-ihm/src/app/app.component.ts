import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDate();
  }

  annonces: any = [];
  loadDate() {
    this.http.get('http://54.89.33.175:8080/api/v1/annonce').subscribe((response) => {
      this.annonces = response;

    });
  }
}
