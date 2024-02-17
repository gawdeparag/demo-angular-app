import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-api-data',
  templateUrl: './fetch-api-data.component.html',
  styleUrl: './fetch-api-data.component.css'
})


export class FetchApiDataComponent {
  breweries!: any[];
  constructor(private http: HttpClient) { 
    this.http.get<any>('https://api.openbrewerydb.org/breweries').subscribe((data: any[]) => {
      this.breweries = data;
    });
  }

}

