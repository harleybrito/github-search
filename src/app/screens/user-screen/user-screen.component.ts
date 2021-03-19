import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-user-screen',
  templateUrl: './user-screen.component.html',
  styleUrls: ['./user-screen.component.scss']
})

export class UserScreenComponent implements OnInit {
  public user: User;
  public fieldValue: string;

  constructor(
    private routeSnapshot: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    const username = this.routeSnapshot.snapshot.params['username'];

    this.fieldValue = username;
    
    this.search(this.fieldValue);
  }

  public search(username: string): void {
    this.userService.load(`/${username}`).subscribe(
      result => {
        console.log(result);
        this.user = result;
        this.router.navigate(['users', username.toLowerCase()]);
      },
      error => {
        this.router.navigate(['users', username.toLowerCase()]);
        this.user = null;
      }
    );
  }

}
