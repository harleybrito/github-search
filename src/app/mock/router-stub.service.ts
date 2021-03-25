import { Injectable } from "@angular/core";
import { NavigationExtras } from "@angular/router";

@Injectable()
export class RouterStubService {
    public navigate(commands: any[], extras?: NavigationExtras): any[]{
        return commands;
    }
}