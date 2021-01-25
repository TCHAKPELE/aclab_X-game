import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroductionComponent} from '../app/introduction/introduction.component';
import {MenuComponent} from '../app/menu/menu.component';
import {Area1Component} from  '../app/area1/area1.component';

const routes: Routes = [

  {

path:"introduction" , component: IntroductionComponent

  },

  {

    path:"menu/:id" , component: MenuComponent
    
      },


      {

        path:"area1/:id" , component: Area1Component
        
          }    

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
