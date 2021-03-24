import { UserStubService } from './../test/user-stub.service';
import { RepoStubService } from './../test/repo-stub.service';
import { RepoService } from './repo.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { UserService } from './user.service';

describe('UserService', () => {
    let userService: UserService;
    let httpTestingController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                UserService,
                HttpClientTestingModule
            ]
        });

        userService = TestBed.inject(UserService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('"get" deve funcionar', () => {
        userService.get("/username").subscribe(user => {
            expect(user).toBeDefined();
            expect(user.name).toBe('Harley de Brito');
        });

        const req = httpTestingController.expectOne('https://api.github.com/users/username');
        expect(req.request.method).toEqual('GET');
        req.flush(new UserStubService().user);
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});