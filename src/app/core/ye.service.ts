import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class YeService {

  url: string = 'https://api.kanye.rest';

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  getQuote(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
}
