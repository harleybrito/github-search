import { Injectable } from "@angular/core";

@Injectable()

export class ActivatedRouteStubService {
    public params: Object = { username: 'harleydebrito' };

    public get snapshot(): Object {
        return {
            params: this.params,
            queryParams: null
        };
    }
}