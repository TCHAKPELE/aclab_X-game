import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur X-Legends';
   

  constructor(private router: Router) {
  
}

begin = function() {
  
  
  this.router.navigate(['/introduction']);
  
};


}
