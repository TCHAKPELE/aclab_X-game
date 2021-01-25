import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   
  title = 'Fiche personnage';
Characters = [
    {
      id: 0,
      image:'assets/Bahamut.png',
      name: 'Bahamut',
      pv: 500,
      attack: 60 ,
      special : 180
    },
    {
      id: 1,
      image:'assets/kirito.png',
      name: 'kirito',
      pv: 400,
      attack: 80 ,
      special : 210
    },
    {
      id: 2,
      image : 'assets/Gilgamesh.png',
      name: 'Gilgamesh',
      pv: 550,
      attack: 40 ,
      special : 170
    },

    {
        id: 3,
        image : 'assets/Lucifer.png',
        name: 'Lucifer',
        pv: 320,
      attack: 70 ,
      special : 280
      }
];
  public numid;
 
  constructor(private route: ActivatedRoute,private router: Router) { }

  start = function() {
  
  
    this.router.navigate(['/area1',this.numid]);
    
  };


  ngOnInit() {
    
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.numid=id;
    
  }

 

}
