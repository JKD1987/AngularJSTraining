import { Injectable } from '@angular/core';
import{Route, RouterState, RouterStateSnapshot, CanActivate, CanDeactivate, ActivatedRouteSnapshot} from '@angular/router'
import { ReviewsComponent } from './reviews/reviews.component';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuardService implements CanActivate, CanDeactivate<{}>{

  constructor() { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log(route);
    console.log(state.url);
    if(state.url === '/reviews')
      return true;
    if(sessionStorage.getItem('login') === 'true')
      return true;
      else return false;
  }

  canDeactivate(comp:ReviewsComponent,
  currentRoute:ActivatedRouteSnapshot,
  currentState:RouterStateSnapshot){
    return window.confirm('Are you sure you want to move out?');
  }
}
