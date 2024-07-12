import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
Url:string;
http = inject(HttpClient)
  constructor() { 
    this.Url = "http://localhost:8081/api";
  }
  GetSuperHero(): Observable<any>{
return this.http.get<any>(`${this.Url}/heroe`);

  }
CreateSuperHero(){

}
CreateReview(){

}
}
