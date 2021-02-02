import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DateApi} from '../ny/ny.component';

@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css']
})
export class TokyoComponent implements OnInit {
  dateApi: DateApi;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get <DateApi>('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
      .subscribe(dateApi => {
        console.log('Response', dateApi);
        this.dateApi = dateApi;
        const str = this.dateApi.datetime;
      });
  }
}
