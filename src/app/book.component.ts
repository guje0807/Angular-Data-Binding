import { Component } from "@angular/core";
import { reposiroty } from "./repository.model";
import { Book } from "./book.model";
import { FormGroup, NgForm } from "@angular/forms";
import { FormControl } from "@angular/forms";


@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrl: './book.component.css'
})
export class BookComponent{

    book:reposiroty = new reposiroty();


    // Reactive Form

    bookForm = new FormGroup({
        name : new FormControl('Sweaters'),
        writer : new FormControl('Tostloy'),
        price : new FormControl("100"),
});

    Submit(){
        console.log(this.bookForm.value);
    }

    /*updateName(){
        this.name.setValue("Life of Pi");
    }*/

    // For Directives
    // a:Book = this.book.getBookId(1);

    // getclassBinding(Id:number):string{
    //     let b = ((this.book.getBookId(Id)) as Book);
    //     return ((b.price as number) >= 300 ? "bg-primary" : "bg-info" );
    // }


    // color:string = "Yellow";

    // getStyleBinding(Id:number):Object{
    //     let a:Book = (this.book.getBookId(Id) as Book);

    //     if(a.price as number >= 300){
    //         return{
    //             "font-size":"20px",
    //             "color":"White"
    //         }
    //     }else{
    //         return{
    //             "font-size":"20px",
    //             "color":"Orange"
    //         }
    //     }

    // }

    // addBook(){
    //     this.book.addBook(new Book(4,'Zahir','Paulo Coleho',200));
    // }


    // For Form Templates

    // newBook:Book = new Book();

    // formSubmit:boolean = false;

    // get jsonBook(){
    //     return JSON.stringify(this.newBook);
    // }

    // addBook(b:Book){
    //     console.log("New Book is:" + this.jsonBook);
    // }

    // submitForm(form:NgForm){
    //     this.formSubmit = true;
    //     if(form.valid){
    //         this.addBook(this.newBook);
    //         this.newBook= new Book();
    //         form.reset();
    //         this.formSubmit=false;
    //     }
    // }


}