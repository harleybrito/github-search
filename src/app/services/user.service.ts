import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { CustomService } from './custom.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService extends CustomService<User> {
  constructor(protected http: HttpClient) {
    super(http, `https://api.github.com/users`);
  }
}
