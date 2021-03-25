import { Observable, Subscriber } from 'rxjs';
import { Injectable } from "@angular/core";
import { NavigationExtras } from '@angular/router';

@Injectable()

export class ActivatedRouteStubService {
    public params: Object = { username: 'harleydebrito' };
    public route: string = '/home';

    public get snapshot(): Object {
        return {
            params: this.params,
            queryParams: null
        };
    }

    public navigate(commands: any[], extras?: NavigationExtras): Promise<boolean> {
        return (commands[0] == this.route) ? Promise.resolve(true) : Promise.resolve(false);
    }
}