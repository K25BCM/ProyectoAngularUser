import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/getUsers';
  }

  getUsers() {
    return this.http.get(this.url);
  }
}
