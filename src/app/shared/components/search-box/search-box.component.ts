import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

    @ViewChild('form', {static: true}) form: NgForm;
    @Output('onTypeCompleted') onTypeCompleted = new EventEmitter<{search: string}>();
    placeholder: string = "Search";
    
    constructor() { 
        
    }

    ngOnInit() {
        this.form.form.valueChanges.pipe(debounceTime(750)).subscribe(data => {
            if (this.form.form.dirty) {
                this.onTypeCompleted.emit(data);
            }
        })
    }

    resetSearchBox() {
        this.form.form.get('search').setValue('');
    }

}
