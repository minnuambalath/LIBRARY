import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  constructor(private router:Router,private authorService:AuthorserviceService) { }
  authorDetail= {
    authorid:'',
    authorname:'',
    work:'',
    published:'',
    imageUrl:''
  }
  ngOnInit(): void {
    let authorid = localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorid).subscribe((data: any)=>{
      this.authorDetail=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.authorService.editAuthor(this.authorDetail);   
    alert("Success");
    this.router.navigate(['/authors']);
  }
}
