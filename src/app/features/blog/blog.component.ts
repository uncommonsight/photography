import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/core/blog.service';
import { Entry } from 'src/app/shared/models/entry.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  newMessage: boolean = false;

  allEntries: Observable<Entry[]>
  newEntry = "";
  title = "";
  body = "";
  
  constructor(
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allEntries = this.blogService.getAllPosts()
  }

  create() {
    
    const newPost: Entry = {
      id: 0,
      newEntry: this.newEntry,
      title: this.title,
      body: this.body,
      createTimestamp: new Date()
    }

    if(this.title === "" || this.body === "") {
      this.newMessage = true;
    } else
      this.blogService.createNewPost(newPost).subscribe(data => {
        this.router.navigate(["/blog/" + this.newEntry]);
        this.newMessage = false;
      })

    this.title = "";
    this.body = "";
  } 
}
