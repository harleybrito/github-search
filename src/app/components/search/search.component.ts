import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() isHomeScreen: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {  }

  public onSearchClicked(): void {
    this.router.navigate(['/users/harleydebrito']);
  }
}
