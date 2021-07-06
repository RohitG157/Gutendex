import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GenreCardComponent } from "./components/genre-card/genre-card.component";

@NgModule({
    declarations: [
        GenreCardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GenreCardComponent,
        CommonModule
    ]
})
export class SharedModule {

}