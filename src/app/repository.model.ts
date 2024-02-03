import { Book } from "./book.model";
import { dataSource } from "./datasource.model";

export class reposiroty{
    private dataSource: dataSource;
    private books: Book[];

    constructor(){
        this.dataSource = new dataSource();
        this.books = new Array<Book>();
        this.dataSource.getBooks().forEach((b:Book) => {this.books.push(b)});
            
        }

    getbooks():Book[]{
        return this.books;
    }

    getBookId(id:number): Book{
        return (this.books.find(v => (v.id == id)) as Book);
    }

    addBook(book:Book){
        this.books.push(book);
    }
}