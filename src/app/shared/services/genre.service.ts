import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../constants/api.constant';
import { Book } from '../models/book.model';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})

export class GenreService {

    constructor(
        private baseService: BaseService
    ) { }
    
    public fetchBooks(params?: Array<{key: string, value: string}>, nextUrl?: string): Observable<{count: number, next: string | null, previous: string | null, results: Array<Book>}> {
        let url = API.FETCH_BOOKS;
        
        if(params.length) {
            
            params.push({
                key: 'mime_type',
                value: "image/jpeg"
            })
            let queryParams = [];
            params.forEach(param => {
                queryParams.push(this.push(param.key, param.value));
            })
            url += "?" + queryParams.join('&');
        } else if (nextUrl) {
            url = nextUrl;
        }
        
        return this.baseService.get(url);
    }

    public push(key: string, value: any): string {
        value = encodeURIComponent(value.toString());
        return [key, value].join("=");
    }

}
