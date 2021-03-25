import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-route-screen',
  templateUrl: './no-route-screen.component.html'
})

export class NoRouteScreenComponent{

  constructor(private router: Router) { }

  public onReturnButtonClicked(): Promise<boolean> {
    return this.router.navigate(['/home']); 
  } 
}
