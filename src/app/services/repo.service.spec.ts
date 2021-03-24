import { RepoStubService } from './../test/repo-stub.service';
import { RepoService } from './repo.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

describe('RepoService', () => {
    let repoService: RepoService;
    let httpTestingController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                RepoService,
                HttpClientTestingModule
            ]
        });

        repoService = TestBed.inject(RepoService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('"getAll" deve funcionar', () => {
        repoService.getAll("/username/repos").subscribe(repos => {
            expect(repos).toBeTruthy('No repos returned');
            expect(repos.length).toBe(5, "Incorrect number of repos");
            const repo = repos.find(repo => repo.name === 'Repositório 1');
            expect(repo.stargazers_count).toBe(54);
        });

        const req = httpTestingController.expectOne('https://api.github.com/users/username/repos');
        expect(req.request.method).toEqual('GET');
        req.flush(new RepoStubService().repos);
    });

    afterEach(() => {
        httpTestingController.verify();
    });
});