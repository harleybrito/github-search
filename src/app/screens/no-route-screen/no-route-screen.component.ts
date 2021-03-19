import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-route-screen',
  templateUrl: './no-route-screen.component.html',
  styleUrls: ['./no-route-screen.component.css']
})
export class NoRouteScreenComponent{

  constructor(private router: Router) { }

  public onReturnButtonClicked(): void {
    this.router.navigate(['/home']);
  }
}
