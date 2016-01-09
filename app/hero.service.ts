import {Injectable} from 'angular2/core';
import {HEROES} from '/mock-heroes.js';

@Injectable()
export class HeroService {
	getHeroes () {
		return Promise.resolve(HEROES);
	}

}