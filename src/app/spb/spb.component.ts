import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface DateApi {
  datetime: string;
}
@Component({
  selector: 'app-spb',
  templateUrl: './spb.component.html',
  styleUrls: ['./spb.component.css']
})
export class SpbComponent implements OnInit {
  dateApi: DateApi;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get <DateApi>('http://worldtimeapi.org/api/timezone/Europe/Moscow')
      .subscribe(dateApi => {
        console.log('Response', dateApi);
        this.dateApi = dateApi;
      });
  }
}
