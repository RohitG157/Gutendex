import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { GenreCardComponent } from "./components/genre-card/genre-card.component";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BookComponent } from './components/book/book.component';
import { AuthorName } from "./pipes/author-name.pipe";
@NgModule({
    declarations: [
        GenreCardComponent,
        SearchBoxComponent,
        BookComponent,
        AuthorName
    ],
    imports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        InfiniteScrollModule,
        GenreCardComponent,
        SearchBoxComponent,
        BookComponent,
        AuthorName
    ]
})
export class SharedModule {

}