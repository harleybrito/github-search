import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html'
})

export class HomeScreenComponent{

  constructor(private router: Router) { }

  public searchFieldCall(value: string): Promise<boolean> {
    return this.router.navigate(['users', value]);
  }
}
