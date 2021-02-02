import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DateApi} from '../ny/ny.component';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.css']
})
export class ParisComponent implements OnInit {
  dateApi: DateApi;
  constructor(private http: HttpClient) { }
    ngOnInit(): void {
    this.http.get <DateApi>('http://worldtimeapi.org/api/timezone/Europe/Paris')
      .subscribe(dateApi => {
        console.log('Response', dateApi);
        this.dateApi = dateApi;
      });
    }
}

