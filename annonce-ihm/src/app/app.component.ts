import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  constructor(private http: HttpClient) {

  }

  loadDate() {
    this.http.get("data.json").subscribe(response => {
      console.log(response);
    })

  }
}
