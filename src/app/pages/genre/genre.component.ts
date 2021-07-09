import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Book } from 'src/app/shared/models/book.model';
import { GenreService } from 'src/app/shared/services/genre.service';

@Component({
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

    genre: string = "";
    books: any = [];
    next: string = "";
    scrollDisabled: boolean = false;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private genreService: GenreService 
    ) { 
        this.route.params.subscribe((params: Params) => {
            this.genre = params['genre'];
            let queryParams = [{
                key: "topic",
                value: this.genre
            }];
            this.getBooks(queryParams);
        });
    }

    ngOnInit() {
    }

    goBack(): void {
        this.router.navigate(['']);
    }

    getBooks(queryParams?, url?): void {
        this.genreService.fetchBooks(queryParams, url).subscribe((books: any) => {
            this.next = books['next'];
            this.books.push(...books['results']);
            this.scrollDisabled = false;
        })
    }

    loadBooks(): void {
        this.scrollDisabled = true;
        if (this.next) {
            this.getBooks([], this.next);
        }
    }

    searchBooks(data: {search: string}): void {
        let queryParams = [
            {
                key: "topic",
                value: this.genre
            }
        ];
        if (data.search) {
            queryParams.push({
                key: "search",
                value: data.search 
            });
            this.books = [];
        }
        this.getBooks(queryParams);
    }    

}
