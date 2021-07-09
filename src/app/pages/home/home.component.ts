import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SYSTEM_CONSTANTS } from 'src/app/shared/constants/system.constant';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    genres: Array<{name: string, img: string}> = SYSTEM_CONSTANTS.GENRE;

    constructor(
        private router: Router
    ) {
    }

    ngOnInit() {
    }

    onSelectGenre(genre: {name: string, img: string}) {
        this.router.navigate(['/genre', genre.name]);
    }

}
