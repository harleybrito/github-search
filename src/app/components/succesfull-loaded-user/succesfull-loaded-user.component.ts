import { Repo } from './../../models/repo';
import { User } from './../../models/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-succesfull-loaded-user',
  templateUrl: './succesfull-loaded-user.component.html',
  styleUrls: ['./succesfull-loaded-user.component.css']
})
export class SuccesfullLoadedUserComponent implements OnInit {
  @Input() user: User = {};
  @Input() repos: Repo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
