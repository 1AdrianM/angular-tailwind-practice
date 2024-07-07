import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
data: any
  api = inject(ApiService);
constructor(){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.data =this.api.CreateSuperHero()

  
}
FetchData(){
console.log(this.data);
}

}
