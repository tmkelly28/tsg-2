import {Component} from 'angular2/core';
import {Hero} from '/hero.js';

@Component({
	selector: "my-hero-detail",
	template: `
		<div *ngIf="hero">
	  		<div>
	  			<h2>{{hero.name}} details!</h2>
	  			<label>id: </label>
	  			{{hero.id}}
	  		</div>
	  		<div>
	  			<label>name: </label>
	  			<div>
	  				<input [(ngModel)]="hero.name" placeholder="name">
	  			</div>
	  		</div>
  		</div>
  		`,
  	inputs: ['hero']
})
export class HeroDetailComponent {
	public hero: Hero;
}
