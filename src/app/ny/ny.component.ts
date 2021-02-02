import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface DateApi {
  datetime: string;
}

@Component({
  selector: 'app-ny',
  templateUrl: './ny.component.html',
  styleUrls: ['./ny.component.css']
})
export class NyComponent implements OnInit {
  dateApi: DateApi;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get <DateApi>('http://worldtimeapi.org/api/timezone/America/New_York')
      .subscribe(dateApi => {
        console.log('Response', dateApi);
        this.dateApi = dateApi;
      });
  }

}
