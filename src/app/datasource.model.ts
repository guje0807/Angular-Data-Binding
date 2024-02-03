import {Book} from './book.model';

export class dataSource
{
    private books: Book[];

    constructor()
    {
        this.books = new Array<Book>(
            new Book(1,'War and Peace','Tolstoy',200),
            new Book(2,'Life of Pi','Yaan Martel',300),
            new Book(3,'Atlas Shrugged','Ayn Rand',400));
    }

    getBooks(): Book[]{
        return this.books;
    }
}