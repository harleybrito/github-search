import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})

export class HomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {  }

  public onSearchClicked(): void {
    this.router.navigate(['/users/harleydebrito']);
  }
}
