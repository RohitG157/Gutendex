import { Author } from './author.model';

export class Book {
    id: number;
    authors: Array<Author>;
    bookshelves: Array<string>;
    download_count: number;
    formats: any;
    languages: Array<string>;
    media_type: string;
    subjects: Array<string>;
    title: string;
}