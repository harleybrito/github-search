import { RepoService } from './../../services/repo.service';
import { Repo } from './../../models/repo';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html'
})

export class UserScreenComponent implements OnInit {
  public user: User;
  public repos: Repo[];
  public isLoading: boolean;
  public found: boolean;
  public fieldValue: string;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private userService: UserService,
    private repoService: RepoService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.isLoading = false;
    this.found = false;
    const username = this.routeSnapshot.snapshot.params['username'];
    this.fieldValue = username;
    this.search(this.fieldValue);
  }

  public search(username: string): void {
    this.isLoading = true;
    this.userService.get(`/${username}`).pipe(
      tap((user: User) => this.user = user),
      switchMap((user: User) => this.repoService.getAll(`/${user.login}/repos`)),
    ).subscribe(
      success => this.successfulLoad(success, username),
      error => this.errorLoad(error, username)
    );
  }

  public successfulLoad(result, fieldValue: string): void {
    this.repos = result;
    this.repos.sort((repoA: Repo, repoB: Repo) => (repoA.stargazers_count > repoB.stargazers_count ? -1 : 1));
    this.isLoading = false;
    this.found = true;
    this.changeRoute(fieldValue);
  }

  public errorLoad(result: HttpErrorResponse, fieldValue: string): void {
    result.status == 404 ? this.found = false : this.found = true;
    this.user = null;
    this.repos = null;
    this.isLoading = false;
    this.changeRoute(fieldValue);
  }

  public changeRoute = (value: string): Promise<boolean> => this.router.navigate(['users', value.toLowerCase()]);

}
