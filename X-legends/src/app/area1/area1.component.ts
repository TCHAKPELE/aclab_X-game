import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area1',
  templateUrl: './area1.component.html',
  styleUrls: ['./area1.component.css']
})
export class Area1Component implements OnInit {

  title = 'Debut de combat';



  constructor(private route: ActivatedRoute) { }

 
  public numid;
  public Ennemy_name;
  public Ennemy_attack;
  public Ennemy_Pv;
  public Ennemy_image;

  public name;
  public attack;
  public Pv;
  public image;
  public sp;


  start = function() {
  
    var Round = 0;
Round=Round+1;
return Round;

  };

  Attack = function(variable) {
  
    this.Ennemy_Pv = this.Ennemy_Pv - variable;


  };


  Attack_sp = function(variable) {
  
    this.Ennemy_Pv = this.Ennemy_Pv - variable;

  };
  ngOnInit() {

    let Characters = [
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

  
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.numid=id;

    let Ennemy_name = Characters[0].name;
  this.Ennemy_name=Ennemy_name;

  let Ennemy_attack = Characters[0].attack;
  this.Ennemy_attack = Ennemy_attack;
  let Ennemy_Pv = Characters[0].pv;
  this.Ennemy_Pv = Ennemy_Pv;

  let Ennemy_image = Characters[0].image;
  this.Ennemy_image = Ennemy_image;

  let name = Characters[this.numid].name;
  this.name=name;

  let attack = Characters[this.numid].attack;
  this.attack = attack;
  let Pv = Characters[this.numid].pv;
  this.Pv = Pv;

  let image = Characters[this.numid].image;
  this.image = image;

  let sp = Characters[this.numid].special;
  this.sp = sp;
    
    
  }

}
