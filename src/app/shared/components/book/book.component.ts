import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { SYSTEM_CONSTANTS } from '../../constants/system.constant';
import { Book } from '../../models/book.model';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

    @Input('books') books: Array<Book> = [];
    @Input('scrollDisabled') scrollDisabled: boolean = false;
    @Output('onPageScroll') onPageScroll = new EventEmitter<any>();
    allowedFormats: Array<{key: string, value: string}> = SYSTEM_CONSTANTS.FORMATS; 
    
    constructor(
        private common: CommonService
    ) { }

    ngOnInit() {
    }

    onScroll(): void {
        this.onPageScroll.emit();
    }

    trackBook(index: number, book: Book) {
        return book.id;
    }

    openBook(fileLinks: any) {
        let isAllowedFormatExist = false;
        let selectedFile: string = "";
        let selectedFileType: string = "";
        let availableFormats = Object.keys(fileLinks);
        let result: Array<{key: string, value: Array<any>}> = [];
        
        this.allowedFormats.some(format => {
            result.push({
                key: format.key,
                value: availableFormats.filter(f => f.includes(format.value))
            })
        })
        
        result.some(element => {
            if (element.value.length) {
                selectedFileType = element.key;
                selectedFile = fileLinks[element.value[0]];
                isAllowedFormatExist = true;
                return true;
            }
        })

        if (!isAllowedFormatExist) {
            let msg = "No viewable version available";
            alert(msg);
        } else {
            let fileExtension = this.common.getFileExtension(selectedFile);
            let fileLink = "";
            
            if(fileExtension === "zip") {
                fileLink =  this.common.generateFileName(selectedFile, selectedFileType);
            } else {
                fileLink = selectedFile;
            }
            window.location.href = fileLink;
        }
    }
}
