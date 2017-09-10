import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
//import {AppComponent} from './app.component';



@Component({
  //selector: 'app-root',
  selector:'my-heroes',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  templateUrl:'./heroes.component.html' ,
  styleUrls:['./heroes.component.css']
//providers:[HeroService]
})
export class HeroesComponent implements OnInit {
heroes : Hero[];  
selectedHero:Hero;

constructor(
  private router:Router,
  private heroService:HeroService){}

getHeroes():void{
  this.heroService.getHeroes().then(heroes => this.heroes=heroes );
}

  ngOnInit():void{
    this.getHeroes();
  }

onSelect(hero:Hero):void{
  this.selectedHero=hero;
}
gotoDetail():void{
  this.router.navigate(['/detail',this.selectedHero.id]);
}

}
