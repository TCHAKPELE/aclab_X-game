import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  title = 'Oser entrez dans la legende ';

  constructor(private router: Router) { }
 
  
  Choix_personnage1 = function() {
   const Characters = [
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
  
    this.router.navigate(['/menu',Characters[0].id]);
    
  };

  Choix_personnage2 = function() {
    const Characters = [
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
  this.router.navigate(['/menu',Characters[1].id]);
    
  };
  Choix_personnage3 = function() {
    const Characters = [
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
  this.router.navigate(['/menu',Characters[2].id]);
    
  };
  Choix_personnage4 = function() {
    const Characters = [
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
  this.router.navigate(['/menu',Characters[3].id]);
    
  };
  



  ngOnInit(): void {
  }

}
