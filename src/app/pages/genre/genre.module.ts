import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenreComponent } from "./genre.component";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [{
    path: ':genre',
    component: GenreComponent
}]

@NgModule({
    declarations: [
        GenreComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        GenreComponent
    ]
})
export class GenreModule {

}