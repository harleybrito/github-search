import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search-label',
  templateUrl: './github-search-label.component.html',
  styleUrls: ['./github-search-label.component.css']
})
export class GithubSearchLabelComponent implements OnInit {

  @Input() public isHomeScreen: boolean = true;

  constructor() { }

  public ngOnInit(): void {  }

  public setLabelStyle() {
    return {
      'font-size': (this.isHomeScreen ? '52.5px' : '32.5px')
    };
  }

}
