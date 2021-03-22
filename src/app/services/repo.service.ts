import { Repo } from './../models/repo';
import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService extends CustomService<Repo> {
  constructor(protected http: HttpClient) {
    super(http, `https://api.github.com/users`);
  }
}
