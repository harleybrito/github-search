import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})

export class NotFoundComponent {

  constructor(private router: Router) { }

  public onReturnButtonClicked(): void {
    this.router.navigate(['/home']);
  }

}
