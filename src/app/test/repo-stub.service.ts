import { Observable, Subscriber } from 'rxjs';
import { Repo } from './../models/repo';
import { Injectable } from "@angular/core";

@Injectable()

export class RepoStubService {
    public repos: Repo[] = [
        {
            name: 'Respositório 1',
            description: 'Repositório 1 é um repositório de teste que isso que aquilo. Repositório 1 é um repositório de teste que isso que aquilo.',
            stargazers_count: 54
        },
        {
            name: 'Respositório 2',
            description: 'Repositório 2 é um repositório de teste que isso que aquilo. Repositório 2 é um repositório de teste que isso que aquilo.',
            stargazers_count: 221
        },
        {
            name: 'Respositório 3',
            description: 'Repositório 3 é um repositório de teste que isso que aquilo. Repositório 3 é um repositório de teste que isso que aquilo.',
            stargazers_count: 300
        },
        {
            name: 'Respositório 4',
            description: 'Repositório 4 é um repositório de teste que isso que aquilo. Repositório 4 é um repositório de teste que isso que aquilo.',
            stargazers_count: 24
        },
        {
            name: 'Respositório 4',
            description: 'Repositório 4 é um repositório de teste que isso que aquilo. Repositório 4 é um repositório de teste que isso que aquilo.',
            stargazers_count: 98
        }
    ];

    public getAll(): Observable<Repo[]> {
        return new Observable<Repo[]>((subscriber: Subscriber<Repo[]>) => {
            subscriber.next(this.repos);
            subscriber.complete();
        });
    }
}