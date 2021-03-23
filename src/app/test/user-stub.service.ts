import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable()

export class UserStubService {
    
    public user: User = {
        name: 'Harley de Brito',
        bio: 'Discente Bacharelado em Engenharia de Computação pelo Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais',
        company: 'Instituto Federal de Educação Ciência e Tecnologia Minas Gerais',
        location: 'Rio de Janeiro, RJ - Brasil',
        login: 'harleydebrito',
        private_repos: 0,
        public_repos: 13,
        followers: 9,
        following: 10,
        avatar_url: 'https://avatars.githubusercontent.com/u/22543873?s=460&u=43853b8e79164b80279b1d73ce2d43ce6f971f31&v=4'
    };

    public get(): Observable<User> {
        return new Observable<User>((subscriber: Subscriber<User>) => {
            subscriber.next(this.user);
            subscriber.complete();
        });
    }
}