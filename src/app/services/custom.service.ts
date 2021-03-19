import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


export class CustomService<T> { 
    constructor(protected http: HttpClient, private API_URL: string) {}

    public load(url?: string): Observable<T> {
        return this.http.get<T>(`${this.API_URL}${url}`).pipe(take(1));
    }
}