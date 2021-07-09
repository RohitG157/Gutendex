import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'authorName'
})

export class AuthorName implements PipeTransform {
    
    transform(value: string): string {
        let authorNameArr = value.split(",");
        let tempHolder = authorNameArr[0];
        authorNameArr[0] = authorNameArr[1];
        authorNameArr[1] = tempHolder;
        return authorNameArr.join(" ");
    }
}