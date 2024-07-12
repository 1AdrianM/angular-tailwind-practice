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
  
constructor(private  api: ApiService){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 
  
}

FetchData(){
 this.api.GetSuperHero().subscribe(
 
  res => {this.data;
  console.log(this.data);
  },
 error  => {console.log(error);
 }

   )
}

}
