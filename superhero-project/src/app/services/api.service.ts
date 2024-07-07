import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
Url:string;
http = inject(HttpClient)
  constructor() { 
    this.Url = "http://localhost:8081/api";
  }
  GetSuperHero(){
this.http.get(`${this.Url}/heroe`);

  }
CreateSuperHero(){

}
CreateReview(){

}
}
