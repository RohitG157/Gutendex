import { Component, OnInit } from '@angular/core';
import { SYSTEM_CONSTANTS } from 'src/app/shared/constants/system.constant';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    genres: Array<{name: string, img: string}> = SYSTEM_CONSTANTS.GENRE;

    constructor() { }

    ngOnInit() {
    }

}
