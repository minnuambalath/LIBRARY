import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from '../bookservice.service';
@Component({
  selector: 'app-updatebooks',
  templateUrl:'./updatebook.componet.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private router:Router,private bookService:BookserviceService) { }
  bookDetail= {
    bookid:'',
    title:'',
    author:'',
    genre:'',
    imageUrl:''
  }
  ngOnInit(): void {
    let bookid = localStorage.getItem("editBookId");
    this.bookService.getBook(bookid).subscribe((data: any)=>{
      this.bookDetail=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.bookDetail);   
    alert("Success");
    this.router.navigate(['/books']);
  }
}