import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-loaded-user',
  templateUrl: './error-loaded-user.component.html',
  styleUrls: ['./error-loaded-user.component.css']
})
export class ErrorLoadedUserComponent{
  @Input() msg: string;

  constructor() { }
}
