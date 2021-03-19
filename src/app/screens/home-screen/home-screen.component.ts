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

  public searchFieldCall = (value: string): Promise<boolean> => this.router.navigate(['users', value])
  
}
